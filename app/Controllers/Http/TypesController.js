const Type = use('App/Models/Type');
class TypesController {
  async loadAllTypes() {
    return Type.all();
  }

  async loadTypes({ request, params }) {
    const { id } = params;
    return Type.findOrFail(id);
  }

  async addType({ request, response }) {
    const data = request.all();
    response.status(201);
    return await Type.add(data);
  }

  async updateType({ request, response, params }) {
    const { id } = params;
    const data = request.all();
    return await Type.update(id, data);
  }

  async deleteType({ params, response }) {
    const { id } = params;
    await Type.delete(id);
    return response.json({ message: `Type with id=${id} deleted` });
  }
}

module.exports = TypesController;
