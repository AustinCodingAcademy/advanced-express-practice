import mongoose from "mongoose";

const schema = new mongoose.Schema({
  year: {
    required: true,
    type: String
  },
  make: {
    retuired: true,
    type: String
  },
  model: {
    retuired: true,
    type: String
  }
});

export default mongoose.model("Vehicle", schema);

