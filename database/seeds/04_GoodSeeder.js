const Factory = use('Factory');
const Good = use('App/Models/Good');
const User = use('App/Models/User');
const Type = use('App/Models/Type');
const Attribute = use('App/Models/Attribute');

class GoodSeeder {
  async run() {
    await Good.query().delete();

    const users = await User.all();
    const usersJSON = users.toJSON();

    const types = await Type.all();
    const typesJSON = types.toJSON();
    const goodsResults = [];
    for (const user of usersJSON) {
      for (const type of typesJSON) {
        goodsResults.push(Factory.model('App/Models/Good').createMany(2, { type, user }));
      }
    }
    await Promise.all(goodsResults);
    const goods = await Good.all();

    const allAttributes = await Attribute.all();

    const results = [];
    for (const good of goods.rows) {
      const attributes = [];
      for (const attr of allAttributes.rows) {
        if (attr.type_id == good.type_id) {
          attributes.push(attr.id);
        }
      }
      results.push(
        good.attribute().attach(attributes, async row => {
          const parameters = await Factory.model('App/Models/Parameter').make({ good, row });
          row.value = parameters.value;
        })
      );
    }
    await Promise.all(results);
  }
}

module.exports = GoodSeeder;
