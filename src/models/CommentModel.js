import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  body: {
    required: true,
    type: String
  }
});

export default mongoose.model("Comment", commentSchema);
