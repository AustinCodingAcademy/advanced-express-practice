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
   }
});

module.exports = mongoose.model("Vehicle", vehicleSchema);