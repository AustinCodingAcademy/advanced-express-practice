const products = require("../products");


let ProductModel = require('../models/ProductModel');

module.exports.list =  function list(req, res) {
    ProductModel.find({}).exec()
    .then(product => {
        return res.json(product);
    });

   }
module.exports.show =  function show(req, res) {
    ProductModel.findById(req.params.id).exec()
    .then(product => {
        return res.json(product);;
     });
    }

module.exports.create =  function create(req, res) {
    let newProducts = new ProductModel({
      name: req.body.name,
      description: req.body.description,
      
    })
    newProducts.save()
    .then(product=>{
        res.json(product)
    })
   }
module.exports.update =  function update(req, res) {
    return res.json({theId: req.params.id});
   }
module.exports.remove =  function remove(req, res) {
    return res.json({});
   }