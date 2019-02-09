const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: {
    type: String
  },
  occupation: {
    type: String
  },
  avatar: {
    type: String
  }
});

// model
const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
