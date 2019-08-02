let VehicleModel = require("../models/vehiclesModel")
exports.list =  function list(request, response) {
   VehicleModel.find((e,v)=>{
       return response.json(v);
   });
}
exports.show = function show(request, response) {
   VehicleModel.findById(request.params.id, (err,v)=>{
       return response.json(v);
   });
}
exports.create =  function create(request, response) {
   let newVehicle = new VehicleModel(request.body);
   newVehicle.save(()=>{
       return response.json(newVehicle);
   });
}