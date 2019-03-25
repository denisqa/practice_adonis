const Good = use('App/Models/Good');

class GoodsController {
  async loadAllGoods({ request }) {
    const data = request.all();
    return Good.findGoods(data);
  }

  async loadGoods({ params }) {
    const { id } = params;
    return Good.findOrFail(id);
  }

  async addGoods({ request, response }) {
    const data = request.all();
    response.status(201);
    return Good.add(data);
  }

  async updateGoods({ request, params }) {
    const { id } = params;
    const data = request.all();
    return Good.update(id, data);
  }

  async deleteGood({ params, response }) {
    const { id } = params;
    await Good.delete(id);
    response.status(204);
    return response.json();
  }
}

module.exports = GoodsController;