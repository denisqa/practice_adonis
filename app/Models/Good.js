const Model = use('Model')

class Good extends Model {
    static get updatedAtColumn(){
        return null;
    }

    type() {
		return this.belongsTo('App/Models/Type');
	}

	user() {
		return this.belongsTo('App/Models/User');
	}

	attribute() {
		return this.belongsToMany('App/Models/Attribute').pivotModel('App/Models/Parameter');
	}
}

module.exports = Good;