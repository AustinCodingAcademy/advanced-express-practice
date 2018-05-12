const Product = require('../Models/productModel')

module.exports.list = ((req,res)=>{
  Product.find({}).exec()
  .then(products=>{
    res.json(products)
  })
})

module.exports.show = ((req, res)=>{
  Product.findById({"_id":req.params.id}).exec()
  .then(product=>{
    res.json(product)
  })
})

module.exports.create = ((req, res)=>{
  const newProduct = new Product({
    name: req.body.name,
    description: req.body.description
  })
  newProduct.save()
  .then(savedProduct=>{
    res.json(savedProduct)
  })
})