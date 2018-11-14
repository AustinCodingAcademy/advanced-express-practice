const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: { 
     required: true,
     type: String
   },
  occupation: { type: String },
  avatar: { type: String },
  active: {
    required: true,
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model("contacts", contactSchema);