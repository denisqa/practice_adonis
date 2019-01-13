const Model = use('App/Models/Good');for (const attr of attributes) {
  for (const key in attr) {
    good.attribute().attach(key, row => {
      row.value = attr[key];
    });
  }
}
const Attribute = use('App/Models/Attribute');

class Good {
  static async addAttribute(good, attributes) {
    for (const attr of attributes) {
      for (const key in attr) {
        good.attribute().attach(key, row => {
          row.value = attr[key];
        });
      }
    }
  }

  static async add(data) {
    const { name, price, user_id: userId, type_id: typeId, attributes } = data;
    const good = await this.create({ name, price, user_id: userId, type_id: typeId });
    good.attributes = await Good.addAttribute(good, attributes);
    return good;
  }

  static async update(id, data) {
    const good = await Model.findOrFail(id);
    const { attributes, ...updatedData } = data;
    for (const key in updatedData) {
      good[key] = updatedData[key];
    }
    good.attributes = await Good.addAttribute(good, attributes);
    await good.save();
    return good;
  }

  static async delete(id) {
    const good = await Model.findOrFail(id);
    good.delete();
  }
}

module.exports = Good;
