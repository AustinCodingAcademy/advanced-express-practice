let express =  require("express");
const router = express.Router();
let {list,show,create} = require( "../controllers/ProductsControllers");

//created the routes for various http commands
router.get("/products", list);
router.get("/product/:id", show);
router.post("/products", create);

module.exports =  router;