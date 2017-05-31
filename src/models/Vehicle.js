import mongoose from "mongoose";

const vehicleSchema = mongoose.Schema({
  imgUrl: String,
  year: String,
  make: String,
  model: String,
  price: String,
  km: Number,
  miles: Number,
  fuel: String,
  city: String,
  isNew: Boolean
});

export default mongoose.model("Vehicle", vehicleSchema);
