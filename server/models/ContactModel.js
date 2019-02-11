const mongoose = require('mongoose');

var contactSchema = new mongoose.Schema({
    name: String,
    occupation: String,
    avatar: String
  });

module.exports = mongoose.model('Contact', contactSchema);