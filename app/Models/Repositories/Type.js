const Model = use('App/Models/Type');

class Type {
  static async add(data) {
    const type = new Model();
    for (const key in data) {
      type[key] = data[key];
    }
    await type.save();
    return type;
  }

  static async update(id, data) {
    const type = await Model.findOrFail(id);
    for (const key in data) {
      type[key] = data[key];
    }
    await type.save();
    return type;
  }

  static async delete(id) {
    const type = await Model.findOrFail(id);
    type.delete();
  }
}

module.exports = Type;
