import mongoose from "mongoose";

const schema = new mongoose.Schema({
 _id: {
   required: true,
   type: Number
 },
 body: {
   required: true,
   type: String
 },
 postId: {
   required: true,
   type: Number
 },
});

export default mongoose.model("Comment", schema);
