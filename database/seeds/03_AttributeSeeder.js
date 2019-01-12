const Type = use('App/Models/Type');
const Attribute = use('App/Models/Attribute');
const Factory = use('Factory');

class AttributeSeeder {
  async run() {
    await Attribute.query().delete();

    const types = await Type.all();
    const typesJSON = types.toJSON();

    for (const type of typesJSON) {
      Factory.model('App/Models/Attribute').createMany(3, type.id);
    }
  }
}

module.exports = AttributeSeeder;
