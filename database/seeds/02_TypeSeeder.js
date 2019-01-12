const Type = use('App/Models/Type');

class TypeSeeder {
  async run () {
    await Type.query().delete();

    const types = [{name: 'car'}, {name: 'laptop'}, {name: 'phone'}];

    await Type.createMany(types);
  }
}

module.exports = TypeSeeder;
