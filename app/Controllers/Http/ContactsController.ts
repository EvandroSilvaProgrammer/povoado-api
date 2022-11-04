import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Contact from 'App/Models/Contact'
import Person from 'App/Models/Person'

export default class ContactsController {
  public async index() {

    const contacts = await Contact.query().preload('person')

    return {
      data: contacts,
    }
  }

  /*
   Status Option || 0 => Block | 1 => Active

   Type options || 1 => Personal | 2 => Business
 */
  public async store({ params, request, response }: HttpContextContract) {

    const person = await Person.findOrFail(params.id)

    if (!person) {
      throw new Error(`Person with id '${person}' was not found.`);
    }

    try {
      const contact = new Contact();

      contact.phone = request.input('phone');
      contact.email = request.input('email');
      contact.adress = request.input('adress');
      contact.type = request.input('type');
      contact.status = request.input('status');
      contact.personId = person.id;

      await Contact.create(contact)

      response.status(201).send(contact)

    } catch (error) {
      throw new Error(error.message);
    }
  }

  public async showContactByName({ params, response }: HttpContextContract) {
    const personContact = await Person.query().whereILike('name', `%${params.name}%`).preload('contacts')

    if (personContact.length === 0) {
      response.status(404)
      return (`No contact found with name: '${params.name}'`)
    }

    response.status(200).send(personContact)
  }

  public async showContactByPhone({ params, response }: HttpContextContract) {
    const personContact = await Contact.query().whereILike('phone', `%${params.phone}%`).preload('person')

    if (personContact.length === 0) {
      response.status(404)
      return (`No contact found with phone: '${params.phone}'`)
    }

    response.status(200).send(personContact)
  }

  public async showContactByEmail({ params, response }: HttpContextContract) {
    const personContact = await Contact.query().whereILike('email', `%${params.email}%`).preload('person')

    if (personContact.length === 0) {
      response.status(404)
      return (`No contact found with email: '${params.email}'`)
    }

    response.status(200).send(personContact)
  }

  public async update({ params, request }: HttpContextContract) {

    const contact = await Contact.findOrFail(params.id)

    if (!contact) {
      throw new Error(`Contact with id '${contact}' was not found.`);
    }

    try {
      const body = request.body()

      contact.phone = body.phone
      contact.email = body.email
      contact.adress = body.adress
      contact.type = body.type
      contact.status = body.status

      await contact.save()

      return contact
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
