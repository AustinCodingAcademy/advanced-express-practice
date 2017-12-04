import mongoose from "mongoose";

const schema = new mongoose.Schema({
 firstName: {
   required: true,
   type: String
 },
 lastName: {
   required: true,
   type: String
 },
 address: {
   required: true,
   type: String
 },
 phone: {
   required: true,
   type: String
 },
 occupation: {
   required: true,
   type: String
 },
 avatar: {
   required: true,
   type: String
 },
});

export default mongoose.model("User", schema);