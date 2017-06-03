import Product from "../models/Product";

const ProductController = {

  list: (request, response) => {
    Product.find().exec()
      .then(data => {
        return response.json(data);
      })
      .catch(() => {
        return response.json("Error");
      });
  },

  show: (request, response, next) => {
    Product.findById(request.params.id).exec()
      .then((product) => {
        return response.json(product);
      })
      .catch((err) => {
        next(err);
      });
  },

  create: (request, response) => {
    const product = new Product(request.body);

    product.save()
      .then(storedProduct => {
        console.log("Product was saved");
        return response.json(storedProduct);
      })
      .catch(() => {
        console.log("Product was NOT saved");
        return response.json("Error");
      });
  }
};

export default ProductController;
