// ContactModel - name, occupation, avatar

const mongoose = require('mongoose');

var contactSchema = new mongoose.Schema({
    name: String,
    occupation: String,
    avatar: Boolean
});

var Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;