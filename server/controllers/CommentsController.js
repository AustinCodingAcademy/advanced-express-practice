import Comment from "../models/Comment";

export function list(request, response) {
     Comment.find({}).exec()
     .then(comments => {
       return response.json(comments);
     });
 }
 export function show(request, response) {
      Comment.findById(request.params.id).exec()
      .then(comments => {
        return response.json(comments);
      });
  }
  export function create(request, response) {
       const comment = new Comment({
           body: request.body.body
       });
       comment.save()
       .then(comments => {
           return response.json(comments);
       });


       export function update(request, response) {
            return response.json(Comment[0].name = request.params.id);

            export function remove(request, response) {
               return response.json(Comment.pop());
