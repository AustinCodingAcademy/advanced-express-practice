import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: String,
  description: String,
  reviewCount: Number,
  rating: Number,
  imgUrl: String,
  price: String,
  category: String,
  reviews: Array
});

export default mongoose.model("Product", productSchema);
