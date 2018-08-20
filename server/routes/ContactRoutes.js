let express = require("express");
const router = express.Router();
let {list,show,create,update,remove} = require("../controllers/contactController");

router.get("/contacts",list);
router.get("/contacts/:id",show);
router.post("/contacts/",update);
router.get("/contacts/:id",remove);
router.post("/contacts", create);

export default router;