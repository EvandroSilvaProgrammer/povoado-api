import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'contacts'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('phone')
      table.string('email')
      table.string('adress') 
      table.integer('type').defaultTo(1) 
      table.boolean('status').defaultTo(true)
      table.integer('person_id').unsigned().references('person.id').onDelete('CASCADE')
      // table.primary(['people_id', 'telefone', 'email', 'type'])
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
