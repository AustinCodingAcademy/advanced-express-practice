const mongoose = require('mongoose');

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    outdoor: Boolean
});

var Cat = mongoose.model('Cat', catSchema);

module.exports = Cat;
