const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
   body: { 
     required: true,
     type: String 
   }
});
// export model with name "CommentModel" and commentSchema
module.exports = mongoose.model("CommentModel", commentSchema);