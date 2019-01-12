const User = use('App/Models/User');

class UserSeeder {
  async run() {
    await User.query().delete();
    const users = [
      {
        username: 'authUser',
        email: '123@mail.com',
        password: '12345'
      },
      {
        username: 'admin',
        email: 'admin@mail.com',
        password: '12345'
      }
    ];
    await User.createMany(users);
  }
}

module.exports = UserSeeder;
