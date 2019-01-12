const Good = use('App/Models/Good');
class GoodsController {
  async loadAllGoods() {
    return Good.all();
  }

  async loadGoods({ request, params }) {
    const { id } = params;
    return Good.findOrFail(id);
  }

  async addGoods({ request, response }) {
    const data = request.all();
    response.status(201);
    return await Good.add(data);
  }

  async updateGoods({ request, response, params }) {
    const { id } = params;
    const data = request.all();
    return await Good.update(id, data);
  }

  async deleteGood({ params, response }) {
    const { id } = params;
    await Good.delete(id);
    return response.json({ message: `Good with id=${id} deleted` });
  }
}

module.exports = GoodsController;
