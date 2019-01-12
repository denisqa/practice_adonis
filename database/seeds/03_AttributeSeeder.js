const Type = use('App/Models/Type');
const Attribute = use('App/Models/Attribute');
const Factory = use('Factory');

class AttributeSeeder {
  async run() {
    await Attribute.query().delete();

    const carType = await Type.findBy('name', 'car');
    const carAttributes = await Factory.model('App/Models/Attribute').createMany(3, carType.id);
    // await carType.attribute().createMany(carAttributes);

    const laptopType = await Type.findBy('name', 'laptop');
    const laptopAttributes = await Factory.model('App/Models/Attribute').createMany(3, laptopType.id);
    // await laptopType.attribute().createMany(laptopAttributes);

    const phoneType = await Type.findBy('name', 'phone');
    const phoneAttributes = await Factory.model('App/Models/Attribute').createMany(1, phoneType.id);
    // await phoneType.attribute().createMany(phoneAttributes);
  }
}

module.exports = AttributeSeeder;
