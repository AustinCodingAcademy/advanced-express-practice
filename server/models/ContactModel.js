import mongoose from "mongoose";

const schema = new mongoose.Schema({
 name: {
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

export default mongoose.model("Contact", schema);
//relates to the mongodb collection contacts viewed in robo-3t
