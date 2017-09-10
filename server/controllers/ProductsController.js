import ProductModel from "../models/ProductModel";


export function list(req, res) {
  ProductModel.find({}).exec()
 .then(products => {
   return res.json(products);
 });
}
export function show(req, res) {
  let productId = req.params.id;
  let singleProduct = products.find(function (product) {
    return productId == product._id;
  });
  return res.json(singleProduct);
}
export function create(req, res) {
  const product = new ProductModel({
   name: req.body.name,
   description: req.body.description,
 });
 product.save()
 .then(product => {
   return res.json(product);
 });
}
export function update(req, res) {
  return res.json({ theId: req.params.id });
}
export function remove(req, res) {
  return res.json({});
}
