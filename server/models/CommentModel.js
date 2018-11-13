let mongoose = require("mongoose");

const schema = new mongoose.Schema({
 body: {
   type: String
 },
 active: {
   type: Boolean
 }
});

module.exports =  mongoose.model("Comment", schema);