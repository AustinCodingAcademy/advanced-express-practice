const Vehicle = require('../models/vehicle.model');


exports.vehicle_create = function (req, res) {
  let vehicle = new Vehicle(
      {
          year: req.body.year,
          make: req.body.make,
          model: req.body.model

      }
  );

  vehicle.save(function (err) {
      if (err) {
          return next(err);
      }
      res.send('Vehicle Created successfully')
  })
};

exports.vehicle_details = function (req, res) {
  Vehicle.findById(req.params.id, function (err, vehicle) {
      if (err) return next(err);
      res.send(vehicle);
  })
};

exports.vehicle_update = function (req, res) {
  Vehicle.findOneAndUpdate(req.params.id, {$set: req.body}, function (err, vehicle) {
      if (err) return next(err);
      res.send('Vehicle udpated.');
  });
};

exports.vehicle_delete = function (req, res) {
  Vehicle.findByIdAndRemove(req.params.id, function (err) {
      if (err) return next(err);
      res.send('Deleted successfully!');
  })
};
