import Comments from "../models/commentsModel";

const commentController = {};

commentController.list = (request, response, next) => {
  Comments.find({}).exec()
  .then(Vehicles => {
    return response.json(Vehicles);
  })
  .catch(err => {
    return next(err);
  });
};

commentController.remove = (request, response, next) => {
  Comments.findByIdAndRemove(request.params.id).exec()
  .then(Commenter => {
    return response.json(Commenter);
  })
  .catch(err => {
    return next(err);
  });
};

commentController.create = (request, response, next) => {
  const comment = new Comments(request.body);

  comment.save()
  .then(storedComment => {
    return response.json(storedComment);
  })
  .catch((err) => {
    return next(err);
  });
  //return response.json(comment);
};

commentController.show = (request, response, next) => {
  Comments.findById(request.params.id).exec()
  .then(Commenter => {
    return response.json(Commenter);
  })
  .catch(err => {
    return next(err);
  });
};


console.log(commentController);
export default commentController;
