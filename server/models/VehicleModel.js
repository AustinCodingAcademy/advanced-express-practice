import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  year: {
    type: Number,
    required: true
  },
  make: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  }
});
export default mongoose.model('Vehicle', schema);
