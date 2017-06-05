import Comment from "../models/Comment";

const CommentController = {

  list: (request, response) => {
    Comment.find().exec()
      .then(data => {
        return response.json(data);
      })
      .catch(() => {
        return response.json("Error");
      });
  },

  show: (request, response, next) => {
    Comment.findById(request.params.id).exec()
      .then((data) => {
        return response.json(data);
      })
      .catch((err) => {
        next(err);
      });
  },

  create: (request, response) => {
    const comment = new Comment(request.body);

    comment.save()
      .then(storedComment => {
        console.log("Comment was saved");
        return response.json(storedComment);
      })
      .catch(() => {
        console.log("Comment was NOT saved");
        return response.json("Error");
      });
  }
};

export default CommentController;
