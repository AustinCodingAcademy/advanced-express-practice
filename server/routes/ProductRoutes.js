let express = require("express");
let router = express.Router();
let {list,show,create,update,remove} =require("../controllers/ProductsControllers");



router.get("/products", list);
router.get("/products/:id", show);
router.post("/products", create);
router.put("/products/:id", update);
router.delete("/products/:id", remove);


module.exports =  router;