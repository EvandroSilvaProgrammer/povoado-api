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

    public async login({ request, response, auth }: HttpContextContract) {
        const password = await request.input('password')
        const email = await request.input('email')
    
        try {
          const token = await auth.use('api').attempt(email, password, {
            expiresIn: '24hours',
          })
          return token.toJSON()
        } catch {
          return response
            .status(400)
            .send({ error: { message: 'User with provided credentials could not be found' } })
        }
      }
}
