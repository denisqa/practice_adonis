const Attribute = use('App/Models/Attribute');
class AttributesController {
  async loadAllAttributes({ params }) {
    const { type_id: typeId } = params;
    return Attribute.findAttributes(typeId);
  }

  async loadAttributes({ params }) {
    const { type_id: typeId, id } = params;
    return Attribute.findAttribute(typeId, id);
  }

  async addAttribute({ request, response, params }) {
    const { type_id: typeId } = params;
    const { name } = request.all();
    response.status(201);
    return Attribute.add(typeId, name);
  }

  async updateAttribute({ request, params }) {
    const { type_id: typeId, id } = params;
    const { name } = request.all();
    return Attribute.update(typeId, id, name);
  }

  async deleteAttribute({ params, response }) {
    const { type_id: typeId, id } = params;
    await Attribute.delete(typeId, id);
    response.status(204);
    return response.json();
  }
}

module.exports = AttributesController;
