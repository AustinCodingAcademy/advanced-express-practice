import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    required:true,
    type: String
  },
  occupation: {
    type: String
  },
  avatar: {
    type:String
  }
});

const ContactModel = mongoose.model("Contact", schema);
export default ContactModel;
