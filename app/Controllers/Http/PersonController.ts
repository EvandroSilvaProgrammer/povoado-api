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

  public async show({ params }: HttpContextContract) {
    try {
      const person = await Person.query().where('id', params.id).preload('contacts').first()
      if (person) {
        return person
      }
    } catch (error) {
      console.log(error)
    }
  }

  public async update({ params, request }: HttpContextContract) {
    const body = request.body()

    const person = await Person.findOrFail(params.id)

    person.name = body.name
    person.birth_date = body.birth_date
    person.status = body.status

    await person.save()

    return {
      message: 'Person updated successfully',
      data: person,
    }
  }

  public async destroy({}: HttpContextContract) {}
}
