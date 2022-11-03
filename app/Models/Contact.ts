import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Person from './Person'

export default class Contact extends BaseModel {

  @column()
  public id: number

  @belongsTo(() => Person)
  public person: BelongsTo<typeof Person>

  @column()
  public phone: string
  
  @column()
  public email: string

  @column()
  public adress: string

  @column()
  public type: number

  @column()
  public status: boolean

  @column()
  public personId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
