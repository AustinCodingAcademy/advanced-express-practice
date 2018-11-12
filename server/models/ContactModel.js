const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: { 
     required: true,
     type: String
   },
  occupation: { type: String },
  avatar: { type: String }
});

module.exports = mongoose.model("Contact", contactSchema);