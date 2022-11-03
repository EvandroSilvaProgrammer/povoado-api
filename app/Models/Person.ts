import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Contact from './Contact'

export default class Person extends BaseModel {

  @hasMany(() => Contact)
  public contacts: HasMany<typeof Contact>

  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public birth_date: Date

  @column()
  public status: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
