const mongoose = require('mongoose');

let contactsSchema = new mongoose.Schema({
    name: String,
    occupation: String,
    avatar: String
});

let Contact = mongoose.model('contacts', contactsSchema);

module.exports = Contact;