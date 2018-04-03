import mongoose from "mongoose";

const schema = new mongoose.Schema({
  _id: {
    type: Number
  },
  name: {
    required: true,
    type: String
  },
  description: {
    type: String
  }
});

const ProductModel = mongoose.model("Product", schema);
export default ProductModel;
