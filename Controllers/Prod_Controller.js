//const products = require("../products");
let Product = require('../Server/models/Product_model');

//get all products
exports.list =  function list(req, res) {
   Product.find((e,p)=>{
    return res.json(p);
   });
   }
//get one comment by id   
   exports.show = function show(req, res) {
    let product = products.find(p=>p.id === req.params._id);
    res.json(product);
   }
   exports.create =  function create(req, res) {
    let newProduct = req.body;
    products.push(newProduct);
   }