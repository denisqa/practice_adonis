const Model = use('Model');

class Parameter extends Model {
  static get updatedAtColumn() {
    return null;
  }

  static get createdAtColumn() {
    return null;
  }

  attribute() {
    return this.belongsTo('App/Models/Attribute');
  }
}

module.exports = Parameter;
