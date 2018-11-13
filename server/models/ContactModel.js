let mongoose = require("mongoose");

//I want to code the definition of what the car looks like

const schema = new mongoose.Schema({
  name: {
    type: String
},
  occupation: {
    type: String
},
  avatar: {
    type: String
}
});

module.exports =  mongoose.model("Contact", schema);