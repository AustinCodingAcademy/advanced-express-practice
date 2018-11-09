const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
  imgUrl: { type: String },
  year: { type: String },
  make: { type: String },
  model: { type: String },
  price: { type: String },
  km: { type: Number },
  miles: { type: Number },
  fuel: { type: String },
  city: { type: String },
  isNews: { type: Boolean },
});

module.exports = mongoose.model("Vehicle", vehicleSchema);
