const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  imgUrl: {
    type: String,
  },
  year: {
    type: String,
    required: true,
  },
  make: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  price: {
    type: String,
  },
  km: {
    type: Number,
  },
  miles: {
    type: Number,
  },
  fuel: {
    type: String,
  },
  city: {
    type: String,
  },
  // NOTE: isNew is reserved by mongoose and can not be used in schema
  // isNew: {
  //   type: Boolean,
  // },
});

module.exports = mongoose.model("Vehicle", schema);
