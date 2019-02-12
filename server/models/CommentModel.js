const mongoose = require("mongoose");

var commentSchema = new mongoose.Schema({
    body:{
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Comment', commentSchema);

