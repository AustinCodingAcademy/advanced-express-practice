const mon = require('mongoose')

const schema = new mon.Schema({
  "name":{
    required: true,
    type: String
  },
  "description":{
    required: true,
    type: String
  },
})

module.exports = schema