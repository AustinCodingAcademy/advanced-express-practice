let express = require("express");
const router = express.Router();
let {list,show,create,update,remove} = require("../controllers/ContactController");

router.get("/contacts", list);
router.get("/contact/:id", show);
router.post("/contacts", create);
router.put("/contact/:id", update);
router.delete("/contact/:id", remove);

module.exports = router;