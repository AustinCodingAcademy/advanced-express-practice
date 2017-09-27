import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  body: {
    required: true,
    type: String
  }
});

export default mongoose.model("Comment", schema);
// const CommentModel = mongoose.model('Comment',schema);
// export default CommentModel;
