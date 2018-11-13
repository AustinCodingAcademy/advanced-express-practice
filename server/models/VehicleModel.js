let mongoose = require("mongoose");

const schema = new mongoose.Schema({
 make: {
   type: String
 },
 model: {
    type: String
 },
 year: {
    type: String
 },
 active: {
   type: Boolean
 }
});

module.exports =  mongoose.model("Vehicle", schema);
