'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const User = use('App/Models/User');

class UserSeeder {
  async run () {
    await User.query().delete();
    const users = [{username: 'root', email: '123@mail.com', password: '12345'}];
    await User.createMany(users);
  }
}

module.exports = UserSeeder;
