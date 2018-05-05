let express =  require("express");
const router = express.Router();
let {list,show,create,update,remove} = require( "../controllers/ProductController.js");


router.get("/products", list);
router.get("/product/:id", show);
router.post("/products", create);
// router.put("/products/:id", update);
// router.delete("/products/:id", remove);

module.exports = router;