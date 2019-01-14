const Model = use('App/Models/Good');

class Good {
  static async addAttribute(good, attributes) {
    const attributesList = [];
    for (const attr of attributes) {
      for (const key in attr) {
        if (attr.hasOwnProperty(key)) {
          attributesList.push({ key, value: attr[key] });
        }
      }
    }

    const attrs = attributesList.map(attribute => {
      good.attribute().attach(attribute.key, row => {
        row.value = attribute.value;
      });
      return attribute;
    });

    return Promise.all(attrs);
  }

  static async findGoods(data) {
    const { name, price, user_id: userId, type_id: typeId, created_at: createdAt } = data;
    const filterByType = typeId || null;
    const filterByName = name || null;
    const filterByUser = userId || null;
    const sortByPrice = ['asc', 'desc'].includes(price) ? price : null;
    const sortByDate = ['asc', 'desc'].includes(createdAt) ? createdAt : null;

    let goods = [];
    if (filterByType) {
      goods = await Model.query()
        .where('typeId', typeId)
        .fetch();
    }
    if (filterByName) {
      goods = await Model.query()
        .where('name', name)
        .fetch();
    }
    if (filterByUser) {
      goods = await Model.query()
        .where('user_id', userId)
        .fetch();
    }
    if (sortByPrice) {
      goods = await Model.query()
        .orderBy('price', sortByPrice)
        .fetch();
    }
    if (sortByDate) {
      goods = await Model.query()
        .orderBy('created_at', sortByDate)
        .fetch();
    }
    if (!filterByType && !filterByName && !filterByUser && !sortByPrice && !sortByDate) {
      goods = await Model.all();
    }
    return goods;
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
    good.merge(updatedData);
    good.attributes = await Good.addAttribute(good, attributes);
    await good.save();
    return good;
  }

  static async delete(id) {
    const good = await Model.findOrFail(id);
    await good.delete();
  }
}

module.exports = Good;
