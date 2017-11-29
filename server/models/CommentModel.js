import mongoose from "mongoose";

const schema = new mongoose.Schema({
  body: {
    required: true,
    type: String
  }
});

export default mongoose.model("Comment", schema);
