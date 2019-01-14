const Main = require('./Main.js');

class Type extends Main {
  static get updatedAtColumn() {
    return null;
  }

  static get createdAtColumn() {
    return null;
  }

  products() {
    return this.hasMany('App/Models/Good');
  }

  attribute() {
    return this.hasMany('App/Models/Attribute');
  }
}

module.exports = Type;
