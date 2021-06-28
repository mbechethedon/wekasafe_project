'use strict'

class Location {
  get rules () {
    return {
      
      location:'required|location|unique:locations',
     
    }
  }


}
module.exports = Location