import mongoose from "mongoose";
import Comment from "../models/comments";


const schema = new mongoose.Schema({
 body: {
   required: true,
   type: String
 }
});

export default mongoose.model("Comment", schema);
