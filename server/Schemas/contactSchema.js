const mon = require('mongoose')

const schema = new mon.Schema({
  "name":{
    required: true,
    type: String
  },
  "occupation":{
    required: true,
    type: String
  },
  "avatar":{
    required: false,
    type: String
  }
})

module.exports = schema