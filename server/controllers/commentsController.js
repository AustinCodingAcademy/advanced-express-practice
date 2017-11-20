import comments from "../comments";


export function list(request, response) {
    response.json([comments]);
   }


export function show(request, response) {
    let id = request.params.id; 
    let commentID = comments.find((comment) => {
      if(comment._id == id){
       return comment
      }
      else response.send("There is no such comment")
    })
    response.json(commentID);
   }


export function create(request, response) {
    comments.push(request.body);
   }


export function update(request, response) {
    return response.json({theId: request.params.id});
   }
export function remove(request, response) {
    return response.json({});
   }
   