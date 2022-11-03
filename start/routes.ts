import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {

  Route.resource('/person', 'PersonController').apiOnly()

  Route.get('/contact/', 'ContactsController.index')
  Route.post('/contact/:id', 'ContactsController.store')
  Route.get('/contact/name/:name', 'ContactsController.showContactByName');
  Route.get('/contact/phone/:telefone', 'ContactsController.showContactByPhone');
  Route.get('/contact/email/:email', 'ContactsController.showContactByEmail');
  Route.put('/contact/:id', 'ContactsController.update');

}).prefix('/api')
