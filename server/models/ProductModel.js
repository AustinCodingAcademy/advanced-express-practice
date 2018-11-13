let mongoose = require("mongoose");

//I want to code the definition of what the car looks like

const schema = new mongoose.Schema({
  name: {
    type: String
},
  descripton: {
    type: String
},
 
});

module.exports =  mongoose.model("Product", schema);