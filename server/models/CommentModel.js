let mongoose = require("mongoose");

//I want to code the definition of what the car looks like

const schema = new mongoose.Schema({
 body: {
   type: String
 },
 
});

module.exports =  mongoose.model("Comment", schema);