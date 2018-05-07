let express =  require("express");
const router = express.Router();
let {list,show,create,update,remove} = require( "../controllers/ContactsControllers");

//created the routes for various http commands
router.get("/contacts", list);
router.get("/contacts/:id", show);
router.post("/contacts", create);
router.put("/contacts/:id", update);
router.delete("/contacts/:id", remove);

module.exports =  router;