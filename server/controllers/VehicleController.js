const VehicleModel = require("../models/Vehicle");


module.exports.list = function list(req, res, next) {
    VehicleModel.find({}).exec()
    .then(c => {
      return res.json(c);
    });
}

module.exports.show = function show(req, res, next) {
    VehicleModel.findById(req.params.id).exec()
    .then(c => {
        return res.json(c);
      });
}

module.exports.create = function create(req, res, next) {
    const newV = new VehicleModel(req.body);
    newV.save()
    .then(message => {
      res.json(message);
    });
}