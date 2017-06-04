import mongoose from "mongoose";

const schema = new mongoose.Schema({
  text: {
    required: true,
    type: String
  }
});

export default mongoose.model("Comment", schema);
