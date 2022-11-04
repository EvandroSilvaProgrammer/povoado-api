import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from 'App/Models/User';

export default class UsersController {
    public async register({ request, response }: HttpContextContract) {

        const body = request.body()

        const user = await User.create(body)

        response.status(201)

        return {
            message: 'User created successfully',
            data: user,
        }
    }
}
