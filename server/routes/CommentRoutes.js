let express = require("express");
const router = express.Router();
let {list,show,create,update,remove} = require("../controllers/CommentController");

router.get("/comments", list);
router.get("/comment/:id", show);
router.post("/comments", create);
router.put("/comment/:id", update);
router.delete("/comment/:id", remove);

module.export = router;