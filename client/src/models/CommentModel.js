import mongoose from "mongoose";

const schema = new mongoose.Schema({
 body: {
   type: String
 }
});

export default mongoose.model("Comment", schema);