import mongoose from "mongoose";

const schema = new mongoose.Schema({
 year: {
   required: true,
   type: String
 },
 make: {
   type: String
 },
 model: {
   type: String
 },
});

export default mongoose.model("Vehicle", schema);