const mongoose = require('mongoose');


var contactSchema = new mongoose.Schema({
name: String,
occupation: String,
avatar: String
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;