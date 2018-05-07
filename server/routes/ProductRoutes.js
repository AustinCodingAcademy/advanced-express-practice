let express =  require("express");
const router = express.Router();
let {list,show,create,update,remove} = require( "../controllers/ProductsControllers");

//created the routes for various http commands
router.get("/products", list);
router.get("/products/:id", show);
router.post("/products", create);
router.put("/products/:id", update);
router.delete("/products/:id", remove);

module.exports =  router;