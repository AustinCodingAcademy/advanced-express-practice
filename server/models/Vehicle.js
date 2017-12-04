import mongoose from "mongoose";

const schema = new mongoose.Schema({
 _id: {
   required: true,
   type: Number
 },
 imgUrl: {
   required: true,
   type: String
 },
 year: {
   required: true,
   type: String
 },
 make: {
   required: true,
   type: String
 },
 model: {
   required: true,
   type: String
 },
 price: {
   required: true,
   type: String
 },
 km: {
   required: true,
   type: Number
 },
 miles: {
   required: true,
   type: Number
 },
 fuel: {
   required: true,
   type: String
 },
 city: {
   required: true,
   type: String
 },
 isNew: {
   required: true,
   type: Boolean
 },
});

export default mongoose.model("Vehicle", schema);
