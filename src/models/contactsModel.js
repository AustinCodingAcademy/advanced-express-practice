import mongoose from "mongoose";

const contactsSchema = mongoose.Schema({
  name: String,
  occupation: String,
  avatar: String,
});

export default mongoose.model("Contacts", contactsSchema);
