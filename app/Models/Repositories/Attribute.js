const Model = use('App/Models/Attribute');

class Attribute {
  static async add(data) {
    const attribute = new Model();

    for (const key in data) {
      attribute[key] = data[key];
    }
    await attribute.save();
    return attribute;
  }

  static async update(id, data) {
    const attribute = await Model.findOrFail(id);
    for (const key in data) {
      attribute[key] = data[key];
    }
    await attribute.save();
    return attribute;
  }

  static async delete(id) {
    const attribute = await Model.findOrFail(id);
    attribute.delete();
  }
}

module.exports = Attribute;
