import products from "../products";
import ProductModel from "../models/ProductModel"

export function list(req, res){
  ProductModel.find({}).exec()
  .then(products => {
    return res.json(products);
  });
}

export function show(request, response){
  ProductModel.findById(request.params.id).exec()
  .then(product => {
    return response.json(product);
  });
}

export function create(req, res){
  const product = new ProductModel({
    name: req.body.name,
    description: req.body.description

  });
  product.save()
  .then(product =>{
    return res.json(product);
  });
}
