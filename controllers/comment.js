let express =  require("express");
const router = express.Router();
let {list,show,create,update,remove} = require( "../controllers/CommentController");


router.get("/comment", list);
router.get("/comment/:id", show);
router.post("/comment", create);
router.put("/comment/:id", update);
router.delete("/comment/:id", remove);

module.exports =  router;

module.exports.list = function list (request, response){
    return response.json([]);

}
module.exports.show = function show (request,response){
    return response.json({theId: request.params.id});
}
module.exports.create = function create (request,response){
    return response.json({});
    
}
module.exports.update =  function update (request,response){
    return response.json({
        theId: request.params.id});
    
}
module.exports.remove = function remove (request,response){
    return response.json({});
}
//Part 4 Database//
 
let commentModel = require("./models/comment");
commentModel.find({}).exec()
.then(comment => {
    console.log(comments);
});