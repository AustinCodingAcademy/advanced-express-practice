const products = require("../products");

let productsIdCount = products.length;

function list(req, res) {
  res.json(products);
}

function show(req, res) {
  const product = products.find(c => {
    return c._id === Number(req.params.id);
  });
  res.json(product);
}

function create(req, res) {
  productsIdCount++;
  products.push({ ...req.body, _id: productsIdCount });
  res.json(products[products.length - 1]);
}

function update(req, res) {
  const id = products.findIndex(c => {
    return c._id === Number(req.params.id);
  });

  const current = products[id];

  products[id] = { current, ...req.body };
  res.json(products[id]);
}

function remove(req, res) {
  const id = products.findIndex(c => {
    return c._id === Number(req.params.id);
  });

  products.slice(id, 1);
  res.send("deleted");
}

module.exports = {
  list,
  show,
  create,
  update,
  remove
};
