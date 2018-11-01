let vehicles = require("../vehicles");

module.exports.list =  function list(request, response) {
    return response.send(vehicles);
}

module.exports.show =  function show(request, response) {
    const vehicle = vehicles.find(vehicles => vehicles._id == request.params.id);
    response.json(vehicle);
    return response.json({id: request.params.id});
}
   
module.exports.create =  function create(req,res,next){
    vehicles.push(req.body);
    vehicles[vehicles.length-1]._id = vehicles[vehicles.length-2]._id + 1;
    return res.json(vehicles[vehicles.length-1]);
}
   
module.exports.update =  function update(req,res,next){
    const index = vehicles.findIndex(vehicles => vehicles._id == req.params.id);
    vehicles[index].name = "Zack"
    res.json(vehicles);
    return res.json(vehicles[index]);
}
   
module.exports.remove =  function remove(req,res,next){
    const index = vehicles.findIndex(vehicles => vehicles._id == req.params.id);
    vehicles[index].active = false;
    return res.json("deleted");
}