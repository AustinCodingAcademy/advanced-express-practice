let express = require("express");
const router = express.Router();
let {list,show,create,update,remove} = require("../controllers/ContactController");

router.get("/contacts", list);
router.get("/contact/:id", show);
router.get("/contacts", create);
router.get("/contact/:id", update);
router.get("/contact/:id", remove);

module.exports = router;