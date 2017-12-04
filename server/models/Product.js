import mongoose from "mongoose";

const schema = new mongoose.Schema({
 _id: {
   required: true,
   type: Number
 },
 name: {
   required: true,
   type: String
 },
 description: {
   required: true,
   type: String
 },
 reviews: {
   required: true,
   type: Number
 },
 rating: {
   required: true,
   type: Number
 },
 imgUrl: {
   required: true,
   type: String
 },
 price: {
   required: true,
   type: Number
 },
 category: {
   required: true,
   type: String
 },
 reviews: {
   required: true,
   type: Object
 },
});

export default mongoose.model("Contact", schema);
