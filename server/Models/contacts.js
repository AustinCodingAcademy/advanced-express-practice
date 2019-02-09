let mongoose = require('mongoose');

let contactSchema = new mongoose.Schema({
    name: String,
    occupation: String,
    avatar: String
})

module.exports = mongoose.model('Contact', contactSchema);