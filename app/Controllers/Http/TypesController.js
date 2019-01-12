const Type = use('App/Models/Type');
class TypesController{
	async loadAllTypes(){
        return Type.all();
    }
    
    async loadTypes({ request, params }){
        const { id } = params;
        return Type.findOrFail(id);
    }

    async addType({ request, response }){
		const data = request.all();
        await Type.add(data);
        return response.json();
    }

    async updateType({ request, response, params }){
		const { id } = params;
		const data = request.all();
        await Type.update(id, data);
        return response.json({result: `Type with id=${id} updated`});
    }

    async deleteType({ params, response }){
		const { id } = params;
        await Type.delete(id);
        return response.json({result: `Type with id=${id} deleted`});
    }
}

module.exports = TypesController;