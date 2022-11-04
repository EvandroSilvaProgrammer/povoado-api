import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User';

export default class UsersController {
    public async register({ request, response, auth }: HttpContextContract) {

        const body = request.body()

        try {
            const user = await User.create(body)
            const token = await auth.use("api").login(user, {
                expiresIn: "24hours",
            });
            response.status(201).send([user, token])

        } catch (error) {
            throw new Error(error.message);
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

    public async logout({ auth, response }: HttpContextContract) {
        try {
            const user = await auth.logout()

            return user
        } catch {
            return response
                .status(400)
                .send({ error: { message: '' } })
        }
    }
}
