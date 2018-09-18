let express =  require("express");
const router = express.Router();
let {list,show,create,update,remove} = require( "../controllers/VehicleController");


router.get("/vehicle", list);
router.get("/vehicle/:id", show);
router.post("/vehicle", create);
router.put("/vehicle/:id", update);
router.delete("/vehicle/:id", remove);

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
let vehicleModel= require ("./models/vehicle");

vehicleModel.find({}).exec()
.then (vehicles => {
    console.log(vehicles);
});