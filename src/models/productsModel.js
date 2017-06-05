import mongoose from "mongoose";

const productsSchema = mongoose.Schema({
  name: String,
  description: String,
});

export default mongoose.model("Product", productsSchema);
