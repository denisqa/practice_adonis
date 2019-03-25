const Route = use('Route');

Route.get('/', () => ({ status: 'Ok', version: '1.0.0' }));

Route.get('login', 'AuthController.login').middleware('guest');

/* only admin */
Route.group(() => {
  Route.get('/types/:type_id/attributes', 'AttributesController.loadAllAttributes');
  Route.get('/types/:type_id/attributes/:id', 'AttributesController.loadAttributes');
  Route.post('/types/:type_id/attributes', 'AttributesController.addAttribute').validator('AddUpdateAttribute');
  Route.put('/types/:type_id/attributes/:id', 'AttributesController.updateAttribute').validator('AddUpdateAttribute');
  Route.delete('/types/:type_id/attributes/:id', 'AttributesController.deleteAttribute');

  Route.get('/types', 'TypesController.loadAllTypes');
  Route.get('/types/:id', 'TypesController.loadTypes');
  Route.post('/types', 'TypesController.addType').validator('AddUpdateType');
  Route.put('/types/:id', 'TypesController.updateType').validator('AddUpdateType');
  Route.delete('/types/:id', 'TypesController.deleteType');
}).middleware(['auth', 'is:admin']);


Route.get('/goods', 'GoodsController.loadAllGoods');
Route.get('/goods/:id', 'GoodsController.loadGoods');

/* only auth and admin */
Route.group(() => {
  Route.post('/goods', 'GoodsController.addGoods').validator('AddGood');
  Route.put('/goods/:id', 'GoodsController.updateGoods').validator('UpdateGood');
  Route.delete('/goods/:id', 'GoodsController.deleteGood');
}).middleware(['auth']);