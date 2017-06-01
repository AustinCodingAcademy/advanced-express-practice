// import products from "../products";
import ProductsModel from "../models/ProductsModel";

export function list(req,res) {
  ProductsModel.find({}).exec()
  .then(products => {
    return res.json(products);
  });
  // return res.json(products);
}

export function create(req,res) {
  const product = new ProductsModel({
    name: req.body.name,
    description: req.body.description
  });
  product.save()
  .then(p => {
    return res.json(p);
  });
  // products.push(req.body);
  // return res.json(req.body);
}

// export function show(req,res) {
//   const oneProduct = products.find(u => u._id === req.params.id);
//   return res.json(oneProduct);
// }

export function show(req,res) {
  ProductsModel.findById(req.params.id).exec()
  .then(product => {
    return res.json(product);
  });
}
