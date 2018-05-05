const products = require("../products");

module.exports.list = function (request, response) {
  return response.json(products);
};
module.exports.show = function (request, response) {
  const product = findProduct(request.params.id);
  return response.json(product);
};
module.exports.create = function (request, response) {
  const newproduct = request.body;
  products.push(newproduct);
  return response.json(products[products.length - 1]);
};
module.exports.update = function (request, response) {
  const product = findProduct(request.params.id);
  product.name += " TEST";
  return response.json(product);
};
module.exports.remove = function (request, response) {
  const product = findProduct(request.params.id);
  const i = products.indexOf(product);
  products.splice(i, 1);
  return response.send("deleted");
};

function findProduct(id) {
  const product = products.find((u) => {
    return u._id === Number(id);
  });
  return product;
}
