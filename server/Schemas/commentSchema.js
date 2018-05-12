const mon = require('mongoose')

const schema = new mon.Schema({
  body:{
    required: true,
    type: String
  },
})

module.exports = schema