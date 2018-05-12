const mon = require('mongoose')

const schema = require('../Schemas/commentSchema')

module.exports = mon.model('Comment',schema)