import express from "express";
import comments from "./comments";
import products from "./products";
import vehicles from "./vehicles";
import contacts from "./contacts";

const app = express();

const port = process.env.PORT || 5001;
app.listen(port, (err) => {
  console.log(`Listening on port:${port}`);
  if (err) {
    return console.log("Error", err);
  }
});
});
