const Model = use('Model');

class Type extends Model {
  static boot() {
    super.boot();
    this.addTrait('App/Models/Traits/Repository');
  }

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
