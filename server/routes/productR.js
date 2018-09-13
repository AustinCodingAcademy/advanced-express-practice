let express =  require("express");
const router = express.Router();
let {list,show,create,update,remove} = require( "../controllers/ProductController");


router.get("/product", list);
router.get("/product/:id", show);
router.post("/product", create);
router.put("/product/:id", update);
router.delete("/product/:id", remove);

module.exports =  router;

