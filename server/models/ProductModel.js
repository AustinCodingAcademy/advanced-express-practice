let mongoose = require("mongoose");

const schema = new mongoose.Schema({
 name: {
   type: String
 },
 description: {
    type: String
 },
 active: {
   type: Boolean
 }
});

module.exports =  mongoose.model("Product", schema);
