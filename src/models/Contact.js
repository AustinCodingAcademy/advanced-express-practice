import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
  name: String,
  occupation: String,
  avatar: String
});

export default mongoose.model("Contact", contactSchema);
