'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')
Route.post('/login-store','AuthController.postLogin').as('login.store')
Route.get('/register','AuthController.registrationView').as('register.create')
Route.post('/register-store','AuthController.postRegister').as('register.store')

Route.group(() => {
    Route.get('/dashboard','AuthController.renderDashboard').as('dashboard')
     Route.post('/logout','AuthController.logout').as('logout')
   
}).middleware(['auth'])
