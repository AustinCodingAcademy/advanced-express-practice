import mongoose from "mongoose";

const schema = new mongoose.Schema({
  body: {
    required: true,
    type: String 
  },
  postId : {
    required: true,
    type: Number
  }
});

export default mongoose.model("Contact", schema);

