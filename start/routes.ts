import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {

  Route.post('/user/register', 'UsersController.register')
  Route.post('/user/login', 'UsersController.login')
  Route.post('/user/logout', 'UsersController.logout')

  Route.get('/contact/', 'ContactsController.index')
  Route.get('/contact/name/:name', 'ContactsController.showContactByName');
  Route.get('/contact/phone/:phone', 'ContactsController.showContactByPhone');
  Route.get('/contact/email/:email', 'ContactsController.showContactByEmail');

  Route.get('/person', 'PersonController.index')
  Route.get('/person/:id', 'PersonController.show')

  Route.group(() => {
    Route.post('/person', 'PersonController.store')
    Route.put('/person/:id', 'PersonController.update')
    Route.delete('/person/:id', 'PersonController.destroy')

    Route.post('/contact/:id', 'ContactsController.store')
    Route.put('/contact/:id', 'ContactsController.update');

  }).middleware("auth:api");

}).prefix('/api')
