import mongoose from "mongoose";

const schema = new mongoose.Schema({
  _id: {
    required: true,
    type: Number
  },
  year: {
    required: true, 
    type: Number
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

export default mongoose.model("Vehicle", schema);