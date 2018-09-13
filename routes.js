//* # Part 2 - Routes//
// Create route files//
 //Organize the routes for /contacts, /vehicles, /comments, /products using express Router
// Import and use the Routers in index.js 
let express = require ("express");
const router = express.router();
//let [contacts,vehicles,comments,products]= require//
//("../controller/ContactController");//

router.get("/contacts",list);
router.get("/vehicles");
router.get("/comments");
router.get("/products");

module.exports = router;
