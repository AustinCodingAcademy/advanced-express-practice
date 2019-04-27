const mongoose = require('mongoose');


let businessSchema = new mongoose.Schema({
Business: String,
Owner: String,
Category: String,
Website: String
});

const Businesses = mongoose.model('businesses', businessSchema);

module.exports = Businesses;