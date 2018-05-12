const mon = require('mongoose')

const schema = require('../Schemas/productSchema')

module.exports = mon.model("Product",schema)