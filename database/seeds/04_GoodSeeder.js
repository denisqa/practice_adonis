const Factory = use('Factory');
const Good = use('App/Models/Good');
const User = use('App/Models/User');
const Type = use('App/Models/Type');
const Attribute = use('App/Models/Attribute');

class GoodSeeder {
  async run () {
    await Good.query().delete();

    const userAuth = await User.findBy('username', 'authUser');
    const userAdmin = await User.findBy('username', 'admin');

    const carType = await Type.findBy('name', 'car');
    const laptopType = await Type.findBy('name', 'laptop');
    const phoneType = await Type.findBy('name', 'phone');

    const goods = await Good.createMany([
      {name: 'Tesla Model S', price: 100000, type_id: carType.id, user_id: userAuth.id},
      {name: 'Nissan GT-R', price: 90000, type_id: carType.id, user_id: userAdmin.id},
      {name: 'Asus X75VC', price: 700, type_id: laptopType.id, user_id: userAuth.id},
      {name: 'Lenovo T470', price: 1099, type_id: laptopType.id, user_id: userAdmin.id},
      {name: 'Samsung Galaxy S9', price: 800, type_id: phoneType.id, user_id: userAuth.id},
      {name: 'Xiaomi Mi 8', price: 399, type_id: phoneType.id, user_id: userAdmin.id}
    ]);

    const carAttributes = await Attribute.ids().where('type_id', carType.id);
    const laptopAttributes = await Attribute.ids().where('type_id', laptopType.id);
    const phoneAttributes = await Attribute.ids().where('type_id', phoneType.id);
    for(let good of goods){
      let attributes = [];
      if(good.type_id == carType.id){
        attributes = carAttributes;
      }
      else if(good.type_id == laptopType.id){
        attributes = laptopAttributes;
      }
      else if(good.type_id == phoneType.id){
        attributes = phoneAttributes;
      }
      await good.attribute().attach(attributes, async (row) => {
        const parameters = await Factory.model('App/Models/Parameter').make({ good, row });
        row.value = parameters.value;
      });
    }
  }
}

module.exports = GoodSeeder
