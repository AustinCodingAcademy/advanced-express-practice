import mongoose from "mongoose";

const schema = new mongoose.Schema({
 name: {
   required: true,
   type: String
 },
 description: {
   type: String
 }
});

export default mongoose.model("Product", schema);