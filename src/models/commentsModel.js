import mongoose from "mongoose";

const commentsSchema = mongoose.Schema({
  body: String
});

export default mongoose.model("Comment", commentsSchema);
