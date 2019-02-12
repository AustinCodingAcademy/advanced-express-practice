const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    name: String,
    occupation: String,
    avatar: String
  });

const Contact = mongoose.model('Contact', ContactSchema);
module.exports = Contact;