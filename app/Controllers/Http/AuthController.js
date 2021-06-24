'use strict'

const User = use('App/Models/User')

class AuthController {

     async postLogin({ request, auth, response}) {
        await auth.attempt(request.input('email'), request.input('password'))
        return response.route('index')
    }
}

module.exports = AuthController
