let express = require("express");
let bodyParser = require("body-parser")
let ContactRoutes  = require("./routes/ContactRoutes");
let VehicleRoutes  = require("./routes/VehicleRoutes");
let CommentRoutes  = require("./routes/CommentRoutes");
let ProductRoutes  = require("./routes/ProductRoutes");


const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(ContactRoutes);
app.use(VehicleRoutes);
app.use(CommentRoutes);
app.use(ProductRoutes);

//Make your app listen to port 3001

app.listen(3001, () => console.log('server started'));

