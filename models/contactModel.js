const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema ({
    name: String,
    occupation: String,
    avatar: String
})

let Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact; 
