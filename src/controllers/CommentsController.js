import CommentModel from "../models/CommentModel";

const CommentsController = {
  create: (request, response, next) => {
    const addedComment = new CommentModel(request.body);

    addedComment.save()
      .then(() => {
        return response.json(addedComment);
      })
      .catch((err) => {
        return next(err);
      });
  },

  list: (request, response, next) => {
    CommentModel.find({}).exec()
      .then(data => {
        return response.json(data);
      })
      .catch(err => {
        return next(err);
      });
  },

  listOne: (request, response, next) => {
    const query = request.params.id;

    CommentModel.findById(query)
      .then((data) => {
        return response.json(data);
      })
      .catch(err => {
        return next(err);
      });
  },

  update: (request, response, next) => {
    const query = request;

    CommentModel.findById(query.params.id).exec()
      .then(data => {
        data.body = query.body.body || data.body;
        data.postId = query.body.postId || data.postId;
        return data.save();
      })
      .then(data => {
        return response.json(data);
      })
      .catch(err => {
        return next(err);
      });
  },

  delete: (request, response, next) => {
    const query = request.params.id;

    CommentModel.findByIdAndRemove(query).exec()
      .then(data => {
        return response.json(data);
      })
      .catch(err => {
        return next(err);
      });
  }
};

export default CommentsController;
