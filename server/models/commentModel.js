const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    body:{
        type: String,
        required: true
    }
});
module.exports = mongoose.model("Comment", schema);