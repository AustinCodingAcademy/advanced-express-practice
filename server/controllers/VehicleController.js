var Vehicle = require("../models/VehicleModel");
var queryHelper = require("../queryhelpers/QueryHelper");
var vehicleCount = 0;



exports.list = function list(request, response) {
    queryHelper.getRecords(Vehicle, (result) => {
        vehicleCount = result.length;
        return response.json(result);
    });
}

exports.show = function show(request, response) {
    queryHelper.getRecordById(Vehicle, parseInt(request.params.id), (result) =>  {
        return response.json(result);
    });
}

exports.create = function create(request, response) {  
  let tempBody = request.body;
  tempBody["_id"] = vehicleCount + 1;
  let temp = new Vehicle(tempBody);
  temp.save();
  exports.list;
  return response.json(temp);
}
