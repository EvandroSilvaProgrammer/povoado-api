import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {

  Route.resource('/person', 'PersonController').apiOnly()

}).prefix('/api')
