const mon = require('mongoose')
const schema = require('../Schemas/contactSchema')

module.exports = mon.model("Contact",schema)