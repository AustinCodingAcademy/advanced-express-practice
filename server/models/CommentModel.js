const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
   body: { 
     required: true,
     type: String 
   },
   active: {
     required: true,
     type: Boolean,
     default: true
   }
});
// export model with name "comments" from mlab collection name and commentSchema
module.exports = mongoose.model("comments", commentSchema);