import mongoose from "mongoose";
mongoose.Promise = global.Promise;


const schema = new mongoose.Schema({
 name: {
   required: true,
   type: String
 },
 description: {
   required: true,
   type: String
 }
});

export default mongoose.model("Product", schema);
