const Model = use('App/Models/Type');

class Type {
  static async add(data) {
    return Model.create(data);
  }

  static async update(id, data) {
    const type = await Model.findOrFail(id);
    type.merge(data);
    await type.save();
    return type;
  }

  static async delete(id) {
    const type = await Model.findOrFail(id);
    await type.delete();
  }
}

module.exports = Type;
