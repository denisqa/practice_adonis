const Model = use('Model');

class Main extends Model {
  static boot() {
    super.boot();
    this.addTrait('Repository');
  }
}

module.exports = Main;
