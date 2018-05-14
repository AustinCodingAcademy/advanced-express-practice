let express =  require("express");
const router = express.Router();
let {list,show,create} = require( "../controllers/ContactsControllers");

//created the routes for various http commands
router.get("/contacts", list);
router.get("/contacts/:id", show);
router.post("/contacts", create);

module.exports =  router;