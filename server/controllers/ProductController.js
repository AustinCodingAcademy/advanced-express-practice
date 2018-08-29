const ProductModel = require("../models/Product");

module.exports.list = function list(req, res, next) {
    ProductModel.find({}).exec()
    .then(c => {
      return res.json(c);
    });
}

module.exports.show = function show(req, res, next) {
    ProductModel.findById(req.params.id).exec()
    .then(c => {
        return res.json(c);
      });
}

module.exports.create = function create(req, res, next) {
    const newP = new ProductModel(req.body);
    newP.save()
    .then(message => {
      res.json(message);
    });
}
