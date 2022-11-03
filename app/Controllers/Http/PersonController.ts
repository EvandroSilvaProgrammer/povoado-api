import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Person from 'App/Models/Person'

export default class PeopleController {
  public async index() {

    const persons = await Person.query().preload('contacts')

    return {
      data: persons,
    }
  }


  public async store({ request, response }: HttpContextContract) {
    const body = request.body()

    const person = await Person.create(body)

    response.status(201)

    return {
      message: 'Person created successfully',
      data: person,
    }
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
