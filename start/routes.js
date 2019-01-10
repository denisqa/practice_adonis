const Route = use('Route');

Route.get('/', () => ({ status: 'Ok', version: '1.0.0' }));

Route.get('login/', 'AuthController.login').middleware('guest');

/* only admin */
Route.group(() => {
    Route.get('/types/:type_id/attributes', 'AttributesController.loadAllAttributes');
    Route.get('/types/:type_id/attributes/:id', 'AttributesController.loadAttributes');
    Route.post('/types/:type_id/attributes', 'AttributesController.addAttribute');
    Route.put('/types/:type_id/attributes/:id', 'AttributesController.updateAttribute');  
    Route.delete('/types/:type_id/attributes/:id', 'AttributesController.deleteAttribute');
    
    Route.get('/types', 'TypesController.loadAllTypes');
    Route.get('/types/:id', 'TypesController.loadTypes');
    Route.post('/types', 'TypesController.addType');
    Route.put('/types/:id', 'TypesController.updateType');  
    Route.delete('/types/:id', 'TypesController.deleteType');
});

Route.get('/goods', 'GoodsController.loadAllGoods');
Route.get('/goods/:id', 'GoodsController.loadGoods');

/* only auth and admin */
Route.post('/goods', 'GoodsController.addGoods');
Route.put('/goods/:id', 'GoodsController.updateGoods'); 
Route.delete('/goods/:id', 'GoodsController.deleteGood'); 