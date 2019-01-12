const Factory = use('Factory');

Factory.blueprint('App/Models/Parameter', async (faker, i, data) => ({
    good_id: data.good.id,
    attribute_id: data.row.attribute_id,
    value: faker.string({ length: 7 })
}));

Factory.blueprint('App/Models/Attribute', async (faker,i, data) => ({
    name: faker.string({ length: 7 }),
    type_id: data
}));