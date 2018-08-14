let express = require("express");
const router = express.Router();
let {list,show,create,update,remove} = require("../controllers/CommentController");

router.get("/comments", list);
router.get("/comment/:id", show);
router.get("/comments", create);
router.get("/comment/:id", update);
router.get("/comment/:id", remove);

module.exports = router;