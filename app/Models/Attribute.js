const Model = use('Model')

class Attribute extends Model {
    static get updatedAtColumn(){
        return null;
    }

    static get createdAtColumn(){
        return null;
    }

    type() {
        this.belongsTo('App/Models/Type');
    }
}

module.exports = Attribute