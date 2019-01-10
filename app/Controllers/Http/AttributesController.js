const Attribute = use('App/Models/Attribute');
class AttributesController{
	async loadAllAttributes(){
        return Attribute.all();
    }
    
    async loadAttributes({ request, params }){
        const { id } = params;
        return Attribute.findOrFail(id);
    }

    async addAttribute({ request, response }){
		const data = request.all();
        await Attribute.add(data);
        return response.json();
    }

    async updateAttribute({ request, response, params }){
		const { id } = params;
		const data = request.all();
        await Attribute.update(id, data);
        return response.json({result: `Attribute with id=${id} updated`});
    }

    async deleteAttribute({ params, response }){
		const { id } = params;
        await Attribute.delete(id);
        return response.json({result: `Attribute with id=${id} deleted`});
    }
}

module.exports = AttributesController;