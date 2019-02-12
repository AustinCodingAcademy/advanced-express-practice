const Product = require('../models/product.model');

// * !! create functions for list, show and create

module.exports.product_create = function (req, res) {
  let product = new Product(
      {
          name: req.body.name,
          price: req.body.price
      }
  );

  product.save(function (err) {
      if (err) {
          return next(err);
      }
      res.send('Product Created successfully')
  })
};

module.exports.product_details = function (req, res) {
  Product.findById(req.params.id, function (err, product) {
      if (err) return next(err);
      res.send(product);
  })
};

module.exports.product_update = function (req, res) {
  Product.findOneAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
      if (err) return next(err);
      res.send('Product udpated.');
  });
};

exports.product_delete = function (req, res) {
  Product.findByIdAndRemove(req.params.id, function (err) {
      if (err) return next(err);
      res.send('Deleted successfully!');
  })
};