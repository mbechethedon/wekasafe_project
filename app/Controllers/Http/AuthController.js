'use strict'

const User = use('App/Models/User')

class AuthController {

     async postLogin({ request, auth, response}) {
        await auth.attempt(request.input('email'), request.input('password'))
        return response.route('dashboard')
    }
      registrationView({ view }) {
        return view.render('register')
    }
    async postRegister({ request, session, response }) {
        const user = await User.create({
            username: request.input('name'),
            email: request.input('email'),
            password: request.input('password')
        })
        session.flash({ successmessage: 'User have been created successfully'})
        return response.route('/');
    }
    renderDashboard({ view}){
         return view.render('index')
    }

      async logout ({ auth, response }) {
        await auth.logout()
        return response.route('/')
    }
}

module.exports = AuthController
