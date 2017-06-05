import Product from "../models/productsModel";

const productController = {};

productController.list = (request, response, next) => {
  Product.find({}).exec()
  .then(Products => {
    return response.json(Products);
  })
  .catch(err => {
    return next(err);
  });
};

productController.remove = (request, response, next) => {
  Product.findByIdAndRemove(request.params.id).exec()
  .then(Products => {
    return response.json(Products);
  })
  .catch(err => {
    return next(err);
  });
};

productController.create = (request, response, next) => {
  const product = new Product(request.body);

  product.save()
  .then(storedProduct => {
    return response.json(storedProduct);
  })
  .catch((err) => {
    return next(err);
  });
  //return response.json(product);
};

productController.show = (request, response, next) =>
  Product.findById(request.params.id).exec()
  .then(Products => {
    return response.json(Products);
  })
  .catch(err => {
    return next(err);
  });


export default productController;
