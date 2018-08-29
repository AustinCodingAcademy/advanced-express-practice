let express = require("express");
const router = express.Router();
let {list,show,create} = require("../controllers/ContactController");

router.get("/contacts", list);
router.get("/contacts/:id", show);
router.post("/contacts", create);

module.exports = router;