import mongoose from "mongoose";

// A mongoose schema is basically a template for how my data will look and be written
// This schema will define what data keys the comment documents(rows) will contain and 
// and whether they will be required

const schema = new mongoose.Schema({
 body: {
   required: true,
   type: String
 }
});

export default mongoose.model("Comment", schema);