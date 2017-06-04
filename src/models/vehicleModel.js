import mongoose from "mongoose";

const vehicleSchema = mongoose.Schema({
  year: String,
  make: String,
  model: String,
});

export default mongoose.model("Vehicle", vehicleSchema);
