const Validator = use('Validator');
const Type = use('App/Models/Type');

const attrsFn = async (data, field, message) => {
  const { type_id: typeId, attributes } = data;
  const type = await Type.findOrFail(typeId);
  const { rows: typeAttrs } = await type.attribute().fetch();

  let fails = false;
  const attributesList = [];
  for (const attr of attributes) {
    for (const key in attr) {
      attributesList[key] = attr[key];
    }
  }

  typeAttrs.forEach(typeAttr => {
    if (attributesList[typeAttr.id] === undefined) {
      fails = true;
      message = `Attribute ${typeAttr.id} does not exist.`;
    }
  });

  if (fails) {
    throw message;
  }
};

Validator.extend('attrs', attrsFn);

class UpdateGood {
  get rules() {
    return {
      name: 'max: 60',
      attributes: 'attrs'
    };
  }
}

module.exports = UpdateGood;
