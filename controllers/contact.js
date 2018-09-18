let express =  require("express");
const router = express.Router();
let {list,show,create,update,remove} = require( "../controllers/ContactController");


router.get("/contacts", list);
router.get("/contacts/:id", show);
router.post("/contacts", create);
router.put("/contacts/:id", update);
router.delete("/contacts/:id", remove);

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

let contactModel = require("./models/contact");

contactModel.find({}).exec()
.then(contacts => {
    console.log(contacts);
});
