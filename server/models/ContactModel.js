import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  occupation: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: true
  }
});
export default mongoose.model('Contact', schema);
