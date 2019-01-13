class AddUpdateType {
  get rules() {
    return {
      name: 'required|max:60'
    };
  }
}

module.exports = AddUpdateType;
