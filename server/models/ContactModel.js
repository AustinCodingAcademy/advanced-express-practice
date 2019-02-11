const mongoose = require("mongoose");

var contactSchema = new mongoose.Schema({
    _id: Number,
    name: String,
    occupation: String,
    avatar: String
  });
var Contact = mongoose.model("Contact", contactSchema);
  
module.exports = Contact;