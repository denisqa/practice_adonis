'use strict'

/*
|--------------------------------------------------------------------------
| GoodSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Good = use('App/Models/Good');

class GoodSeeder {
  async run () {
    await Good.query().delete();
    const goods = [{name: 'Samsung Galaxy S9', price: 300, type_id: 1, user_id: 1},{name: 'Nokia', price: 199, type_id: 1, user_id: 1}];
    await Good.createMany(goods);
  }
}

module.exports = GoodSeeder
