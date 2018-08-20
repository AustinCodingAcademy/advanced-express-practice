let express = require("express");
const router = express.Router();
let {list,show,create,update,remove} = require("../controllers/commentController");

router.get("/comments",list);
router.get("/comments/:id",show);
router.post("/comments/",update);
router.get("/comments/:id",remove);
router.post("/comments", create);

export default router;