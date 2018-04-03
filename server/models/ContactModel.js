import mongoose from "mongoose";

const schema = new mongoose.Schema({
 _id: {
   type: Number
 },
 name: {
   required: true,
   type: String
 },
 occupation: {
   type: String
 },
 avatar: {
   type: String
 }
});

const ContactModel = mongoose.model("Contact", schema);
export default ContactModel;
