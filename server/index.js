let express = require("express");
const bodyParser = require("body-parser");

// // Imports routes 
const ContactRoutes = require("./routes/contact.routes");
const VehicleRoutes = require("./routes/vehicle.routes");
const CommentRoutes = require("./routes/comments.routes");
const ProductRoutes = require("./routes/products.routes");
const app = express();

const mongoose = require('mongoose');
let dev_db_url = 'mongodb://anyuser:abcd1234@ds129085.mlab.com:29085/advanced-express-practice';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB,{useMongoClient:true});
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/contacts',ContactRoutes);
app.use('/vehicles',VehicleRoutes);
app.use('/comments',CommentRoutes);
app.use('/products',ProductRoutes);



app.listen(3001, (err) => {
  if (err) {
    return console.log("Error", err);
  }
  console.log("Web server is now listening for messages", err);
 });
