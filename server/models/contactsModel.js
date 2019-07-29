const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const contacts = mongoose.model(contacts, .....)

const ContactSchema = new Schema({
    id: Number,
    name: String,
    occupation: String,
    avatar: String
})