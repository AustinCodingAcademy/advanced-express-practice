let express = require("express");
let vehicleRoutes = require("./routes/vehicles");
let contactsRoutes  = require("./routes/contacts");
let commentsRoutes = require("./routes/comments");
let productsRoutes = require("./routes/products");

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://kelly-nguyen-1:45683968kn@aca-practice-ss4lm.mongodb.net/advanced-express-practice?retryWrites=true&w=majority', {useNewUrlParser: true},(err)=>{
   console.log("the error is",err)
   //start web server
});


const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(express.static("public"));

const thePort = 3001;

app.use(vehicleRoutes);
app.use(contactsRoutes);
app.use(commentsRoutes);
app.use(productsRoutes);


  app.listen(thePort, (err) => {
 if (err) {
   return console.log("Error", err);
 }
 console.log("Web server is now listening for messages on port",thePort);
});
