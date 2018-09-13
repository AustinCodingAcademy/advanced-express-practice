let express =  require("express");
const router = express.Router();
let {list,show,create,update,remove} = require( "../controllers/CommentController");


router.get("/comment", list);
router.get("/comment/:id", show);
router.post("/comment", create);
router.put("/comment/:id", update);
router.delete("/comment/:id", remove);

module.exports =  router;
