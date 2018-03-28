import CommentModel from "../models/CommentModel";

export function list(request, response) {
  //console.log("CommentsController list");
  CommentModel.find({}).exec()
 .then(comments => {
   //console.log("CommentsController list2");
   return response.json(comments);
 });
}

export function create(request, response) {
  const comment = new CommentModel({
    body: request.body.body
  });
  comment.save()
  .then(com => {
    return response.json(com);
  });
}

export function show(request, response) {
  //console.log("CommentsController request params",request.params);
  CommentModel.findById(request.params.commentID).exec()
  .then(comment => {
    return response.json(comment);
  });
}

export function update(request, response) {
  CommentModel.findById(request.params.id).exec()
    .then(comment => {
      comment.body = request.body.body || comment.body;
      return user.save();
    })
    .then(comment => {
      return response.json(comment);
    });
}

export function remove(request, response) {
 return response.json({});
}

/*export function show(request, response) {
  let id = request.params.commentID; //set id equal to the request in the url
  let comment = comments.find((c)=>{
    if (c._id==id){ //double equals to compare a number and a string: 1 and "1"
      //console.log("Inside if statement: true")
      return true;
    }else{
      return false;
    }
  })
  return response.json(comment);
}*/
