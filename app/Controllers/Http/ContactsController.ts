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
  public async store({ params, request }: HttpContextContract) {

    const person = await Person.findOrFail(params.id)

    const contact = new Contact();

    contact.phone = request.input('telefone');
    contact.email = request.input('email');
    contact.adress = request.input('adress');
    contact.type = request.input('type');
    contact.status = request.input('status');
    contact.personId = person.id;

    await Contact.create(contact)

    return {
      message: 'Contact created sucessfully!!!',
      data: contact,
    }
  }

  public async showContactByName({ params }: HttpContextContract) {
    const personContact = await Person.query().whereILike('name', `%${params.name}%`).preload('contacts')

    return {
      data: personContact,
    }
  }

  public async showContactByPhone({ params }: HttpContextContract) {
    const personContact = await Contact.query().whereILike('telefone', `%${params.telefone}%`).preload('person')

    return {
      data: personContact,
    }
  }

  public async edit({ }: HttpContextContract) { }

  public async update({ }: HttpContextContract) { }

  public async destroy({ }: HttpContextContract) { }
}
