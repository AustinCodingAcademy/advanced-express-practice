import mongoose from "mongoose";
mongoose.Promise = global.Promise;


const schema = new mongoose.Schema({
 body: {
   required: true,
   type: String
 },
});

export default mongoose.model("Comment", schema);
