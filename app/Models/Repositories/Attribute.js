const Type = use('App/Models/Type');

class Attribute {
  static async findAttributes(typeId) {
    const type = await Type.findOrFail(typeId);
    return type.attribute().fetch();
  }

  static async findAttribute(typeId, id) {
    const type = await Type.findOrFail(typeId);
    return type
      .attribute()
      .where('id', id)
      .fetch();
  }

  static async add(typeId, name) {
    const type = await Type.findOrFail(typeId);
    return type.attribute().create({ name });
  }

  static async update(typeId, id, name) {
    const type = await Type.findOrFail(typeId);
    const attribute = await type
      .attribute()
      .where('id', id)
      .firstOrFail();
    attribute.merge({ name });
    await attribute.save();
    return attribute;
  }

  static async delete(typeId, id) {
    const type = await Type.findOrFail(typeId);
    const attribute = await type
      .attribute()
      .where('id', id)
      .firstOrFail();
    await attribute.delete();
  }
}

module.exports = Attribute;
