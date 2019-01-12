const Attribute = use('App/Models/Attribute');
class AttributesController{
	async loadAllAttributes({ params }){
		const { type_id: typeId } = params;
		return Attribute.findAttributes(typeId);
	}
	
	async loadAttribute({ request, params }){
		const { type_id: typeId, id } = params;
		return Attribute.findAttribute(typeId, id);
	}

	async addAttribute({ request, response, params }){
		const { type_id: typeId } = params;
		const { name } = request.all();
		response.status(201);
		return await Attribute.add(typeId, name);;
	}

	async updateAttribute({ request, params }){
		const { type_id: typeId, id } = params;
		const { name } = request.all();
		return await Attribute.update(typeId, id, name);
	}

	async deleteAttribute({ params, response }){
		const { type_id: typeId, id } = params;
		await Attribute.delete(typeId, id);
		return response.json({message: `Attribute with id=${id} deleted`});
	}
}

module.exports = AttributesController;