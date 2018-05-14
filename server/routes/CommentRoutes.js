let express =  require("express");
const router = express.Router();
let {list,show,create} = require( "../controllers/CommentsControllers");

//created the routes for various http commands
router.get("/comments", list);
router.get("/comment/:id", show);
router.post("/comments", create);

module.exports =  router;