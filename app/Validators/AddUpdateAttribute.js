class AddUpdateAttribute {
  get rules() {
    return {
      name: 'required|max:60',
      type_id: 'required'
    };
  }
}

module.exports = AddUpdateAttribute;
