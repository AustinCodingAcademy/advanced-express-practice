import mongoose from "mongoose";

const schema = new mongoose.Schema({
  imgUrl: {
    required: true,
    type: String 
  },
  year: {
    required: true,
    type: String
  },
  make: {
    retuired: true,
    type: String
  },
  model: {
    retuired: true,
    type: String
  },
  price: {
    retuired: true,
    type: String
  },
  km: {
    retuired: true,
    type: Number 
  },
  miles: {
    retuired: true,
    type: Number
  },
  fuel: {
    retuired: true,
    type: String
  },
  city: {
    retuired: true,
    type: String
  },
  isNew: {
    retuired: true,
    type: Boolean 
  }
});

export default mongoose.model("Vehicle", schema);

