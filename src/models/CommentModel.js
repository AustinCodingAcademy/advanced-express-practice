import mongoose from "mongoose";


const commentSchema = mongoose.Schema({
  body: String,
  postId: Number
});

export default mongoose.model("Comment", commentSchema);
