const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
   name: { 
      required: true,
      type: String 
   },
   description: { 
      required: true,
      type: String 
   },
   active: {
     required: true,
     type: Boolean,
     default: true
   }
});

module.exports = mongoose.model("products", productSchema);