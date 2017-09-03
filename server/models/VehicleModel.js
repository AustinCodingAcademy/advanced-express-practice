import mongoose from "mongoose";
mongoose.Promise = global.Promise;


const schema = new mongoose.Schema({
 year: {
   required: true,
   type: Number
 },
 make: {
   required: true,
   type: String
 },
 model: {
   required: true,
   type: String
 },
});

export default mongoose.model("Vehicle", schema);
