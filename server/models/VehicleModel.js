import mongoose from "mongoose";

const schema = new mongoose.Schema({
  _id: {
    type: Number
  },
  year: {
    // required: true,
    type: String
  },
  make: {
    type: String
  },
  model: {
    type: String
  }
});

const VehicleModel = mongoose.model("Vehicle", schema);
export default VehicleModel;
