const mongoose = require('mongoose');

var ContactModel = new mongoose.Schema({
    name: String,
    occupation: String,
    avatar: String
})

var Contact = mongoose.model("Contact", ContactModel);

module.exports = Contact;