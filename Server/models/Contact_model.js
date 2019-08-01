const mongoose = require('mongoose');

let contactSchema = new mongoose.Schema({
    name: String,
    occupation: String,
    avatar: Number
});

let Contact = mongoose.model('Contact', contactSchema);

module.exports =  Contact;