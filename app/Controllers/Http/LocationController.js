'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Location = use('App/Models/Location')
/**
 * Resourceful controller for interacting with locations
 */
class LocationController {
  /**
   * Show a list of all locations.
   * GET locations
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
     const location = await Location.all()
    return view.render('locations.index', {
      title:'Location',locations:location.toJSON()
    })
  }

  /**
   * Render a form to be used for creating a new location.
   * GET locations/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    return view.render('locations.create', {
      title:'Create Form'
    })
  }

  /**
   * Create/save a new location.
   * POST locations
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response,session }) {
     const location = await Location.create({
      location: request.input('location')
    })
    session.flash({ 'successmessage': 'Location has been created'})
    return response.redirect('location')
  }

  /**
   * Display a single location.
   * GET locations/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
      const location = await Location.find(params.id)
    return view.render('locations.edit', {
      location: location.toJSON()
    })
  }

  /**
   * Render a form to update an existing location.
   * GET locations/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update location details.
   * PUT or PATCH locations/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response,session }) {
    const location = await Location.find(params.id)
    location.location = request.input('location')
    await location.save()
     session.flash({'successmessage': 'Location has been updated'})
     return response.redirect('/location')
  }

  /**
   * Delete a location with id.
   * DELETE locations/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = LocationController
