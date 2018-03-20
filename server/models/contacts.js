import mongoose from "mongoose";

const schema = new mongoose.Schema({
  _id: {
    required: true,
    type: Number
  },
  name: {
    required: true,
    type: String
  },
  occupation: {
    required: true,
    type: String
  },
  avatar: {
    required: true,
    type: String
  }  
});

export default mongoose.model("Contact", schema);
