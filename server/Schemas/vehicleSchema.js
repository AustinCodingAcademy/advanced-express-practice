const mon = require('mongoose')

const schema = new mon.Schema({
  "year":{
    required:true,
    type: Number
  },
  "make":{
    required: true,
    type: String
  },
  "model":{
    required: true,
    type: String
  }
})

module.exports = schema