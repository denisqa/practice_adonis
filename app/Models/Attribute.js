const Main = require('./Main.js');

class Attribute extends Main {
  static get updatedAtColumn() {
    return null;
  }

  static get createdAtColumn() {
    return null;
  }
}

module.exports = Attribute;
