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

    try {
      const person = await Person.create(body)
      response.status(201).send(person)
    } catch (error) {
      throw new Error(error.message);
    }
  }

  public async show({ params }: HttpContextContract) {
    const person = await Person.query().where('id', params.id).preload('contacts').first()

    if (person) {
      return person
    }

    throw new Error(`Person with id '${params.id}' was not found.`);
  }

  public async update({ params, request }: HttpContextContract) {

    const person = await Person.findOrFail(params.id)

    if (!person) {
      throw new Error(`Person with id '${params.id}' was not found.`);
    }

    const body = request.body()

    try {
      person.name = body.name
      person.birth_date = body.birth_date
      person.status = body.status

      await person.save()

      return person
    } catch (error) {
      throw new Error(error.message);
    }
  }

  /*
    Status Options | 0 => Block/delete || 1 => Active
  */
  public async destroy({ params }: HttpContextContract) {
    const person = await Person.findOrFail(params.id)

    person.status = false

    await person.save()

    return {
      message: 'Person soft delete successfully',
      data: person,
    }
  }
}
