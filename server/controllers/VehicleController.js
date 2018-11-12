const vehicles = require("../models/VehicleModel");
// .get vehicles
module.exports.list = (req, res) => {
   VehicleModel.find({}).exec().then(vehicles => {
      return res.json(vehicles);
   }) 
}

// .get vehicle by ID
module.exports.show = (req, res) => {
   let vehicle = vehicles.find((vehicle) => vehicle._id == req.params.id);
   return res.json(vehicle);
}

// .post new vehicle
module.exports.create = (req, res) => {
   // instantiating new instance of VehicleModel class
   // using req.body data to fill in values for vehcile schema
   const vehicle = new VehicleModel(req.body);
   // add new vehicle to vehicles array
   vehicle.save();
   // return array with added vehicle
   return res.json(vehicles);
}

// .put vehicle by ID
module.exports.update = (req, res) => {
   VehicleModel.findById(request.params.id).then((err, vehicle) => {
      if (err) return handleError(err);

      vehicle.year = "2006",
      vehicle.make = "Toyota",
      vehicle.model = "Camry";
      vehicle.save((err, updVehicle) => {
         if (err) return handleError(err);
         res.send(updVehicle);
      })
   })
}
// .delete contact by ID
module.exports.remove = function remove(req, res) {
   return res.json({});
}
  