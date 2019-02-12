//  ContactModel - name, occupation, avatar


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ContactSchema = new Schema({
    name: {type: String, required: true, max: 100},
    occupation: {type: String, required: true},
    avatar: {type: String}
});


// Export the model
module.exports = mongoose.model('Contact', ContactSchema);