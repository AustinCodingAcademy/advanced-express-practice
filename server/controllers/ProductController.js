app.use(express.static('public'));
// Body Parser Middleware
app.use(bodyParser.json());

const products = require("./products");
let productIdCount = products.length; 
// .get products
export function list(req, res) {
   return res.json(products);
}
// .get product by ID
export function show(req, res) {
   let product = products.find((product) => product._id == req.params.id);
   return res.json(product);
}
// .post new product
export function create(req, res) {
   productIdCount++
   const newProduct = {
      _id: productIdCount,
      name: req.body.name,
      occupation: req.body.occupation
   }
   // add new product to products array
   products.push(newProduct);
   // return array with added contact
   return res.json(products);
}
// .put product by ID
export function update(req, res) {
   return res.json({theId: req.params.id});
}
// .delete product by ID
export function remove(req, res) {
   return res.json({});
}