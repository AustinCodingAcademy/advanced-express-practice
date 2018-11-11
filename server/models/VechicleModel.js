const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
  year: { type: String },
  make: { type: String },
  model: { type: String }
});

module.exports = mongoose.model("Vehicle", vehicleSchema);
