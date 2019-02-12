const mongoose = require("mongoose");

var contactSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    occupation: {
        type: String,
        require: true
    },
    avatar: {
        type: String,
        require: true,
    }
})

module.exports = mongoose.model('Contact', contactSchema);
