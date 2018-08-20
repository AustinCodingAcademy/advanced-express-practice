import express from "express";
import products from "./products";
import bodyParser from "body-parser";
import contactRoutes from "./routes/ContactRoutes";
import vehicleRoutes from "./routes/VehicleRoutes";
import commentRoutes from "./routes/CommentRoutes";
import productRoutes from "./routes/ProductRoutes";

import mongoose from "mongoose";
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://user1:iamuser1@ds119702.mlab.com:19702/aca-test-mw");


         
 app.listen(3001, (err) => {
    if (err) {
        return console.log("Error", err);
        }
    console.log("Web server is now living in apartment 3001")

});

app.use(contactRoutes);
app.use(vehicleRoutes);
app.use(commentRoutes);
app.use(productRoutes);