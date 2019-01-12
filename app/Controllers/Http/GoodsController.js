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
    await Good.add(data);
    return response.json();
  }

  async updateGoods({ request, response, params }) {
    const { id } = params;
    const data = request.all();
    await Good.update(id, data);
    return response.json({ result: `Good with id=${id} updated` });
  }

  async deleteGood({ params, response }) {
    const { id } = params;
    await Good.delete(id);
    return response.json({ result: `Good with id=${id} deleted` });
  }
}

module.exports = GoodsController;
