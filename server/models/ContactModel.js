import mongoose from 'mongoose';

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
  }
});

const ContactModel = mongoose.model('Contact',schema);
export default ContactModel;
