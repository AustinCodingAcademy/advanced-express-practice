const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
   year: { 
      required: true,
      type: String 
   },
   make: { 
      required: true,
      type: String 
   },
   model: { 
      required: true,
      type: String
   },
   active: {
     required: true,
     type: Boolean,
     default: true
   }
});

module.exports = mongoose.model("vehicles", vehicleSchema);