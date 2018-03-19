import comments from "../comments"

export function list(request, response) {
 return response.json(comments);
}
export function show(request, response) {
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
}
export function create(request, response) {
  comments.push(request.body)
  return response.json(request.body);
}
export function update(request, response) {
 return response.json({commentID: request.params.commentID});
}
export function remove(request, response) {
 return response.json({});
}
