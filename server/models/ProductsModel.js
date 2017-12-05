import mongoose from "mongoose";

const schema = new mongoose.Schema({
 name: {
   required: true,
   type: String
 },
 description: {
   required: true,
   type: String
 },
 price: {
   required: false,
   type: Number
 }
});

export default mongoose.model("Product", schema);