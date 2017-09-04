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
});

export default mongoose.model("Product", schema);
//relates to the mongodb collection products viewed in robo-3t
