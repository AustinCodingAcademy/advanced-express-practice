const mon = require('mongoose')
const schema = require('../Schemas/vehicleSchema')

module.exports = mon.model('Vehicle',schema)