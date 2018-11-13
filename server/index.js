let express = require("express");
let bodyParser = require("body-parser")
let ContactRoutes  = require("./routes/ContactRoutes");
let VehicleRoutes  = require("./routes/VehicleRoutes");
let CommentRoutes  = require("./routes/CommentRoutes");
let ProductRoutes  = require("./routes/ProductRoutes");

let mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://nikidaks:ahU60IKDv3hD@ds149495.mlab.com:49495/aca-express-practice");


const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(ContactRoutes);
app.use(VehicleRoutes);
app.use(CommentRoutes);
app.use(ProductRoutes);

//Make your app listen to port 3001

app.listen(3001, () => console.log('server started'));

