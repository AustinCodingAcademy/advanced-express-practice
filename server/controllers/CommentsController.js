//import comments from "../comments";
import CommentModel from "../models/Comment";

export function list(request, response) {
    //For Array
    //return response.json(comments);

    //For DB
    CommentModel.find({}).exec()
    .then(comments => {
        return response.json(comments);
    });
}
export function show(request, response) {
    //For Array
    //return response.json(comments.find(comment => comment._id == request.params.id) || {});
    
    //For DB
    CommentModel.findById(request.params.id).exec()
    .then(comment => {
      return response.json(comment);
    });
}
export function create(request, response) {
    //For Array
    //    comments.push(request.body);
    //return response.json({});
    
    //For DB
    const newComment = new CommentModel(request.body);
    newComment.save()
      .then(comment => {
        return response.json(comment);
      });
}
export function update(request, response) {
    return response.json({theId: request.params.id});
}
export function remove(request, response) {
    return response.json({});
}