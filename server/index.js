let express = require("express");
let mongoose = require('mongoose');
let cors = require('cors');
mongoose.connect('mongodb://test:test1234@ds239936.mlab.com:39936/allblackeverything');



const bodyParser = require("body-parser");
const businessRoutes = require("./routes/BusinessRoutes");



const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(businessRoutes);


app.listen(3067, (err) => {
 if (err) {
   return console.log("Error", err);
 }
 console.log("Web server is now listening for messages");
});