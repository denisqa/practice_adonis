const Type = use('App/Models/Type');

class TypesController {
  async loadAllTypes() {
    return Type.all();
  }

  async loadTypes({ params }) {
    const { id } = params;
    return Type.findOrFail(id);
  }

  async addType({ request, response }) {
    const data = request.all();
    response.status(201);
    return Type.add(data);
  }

  async updateType({ request, params }) {
    const { id } = params;
    const data = request.all();
    return Type.update(id, data);
  }

  async deleteType({ params, response }) {
    const { id } = params;
    await Type.delete(id);
    response.status(204);
    return response.json();
  }
}

module.exports = TypesController;