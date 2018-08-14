let express = require("express");
const router = express.Router();
let {list,show,create,update,remove} = require("../controllers/ProductController");

router.get("/products", list);
router.get("/product/:id", show);
router.get("/products", create);
router.get("/product/:id", update);
router.get("/product/:id", remove);

module.exports = router;