import express from "express";
import bodyParser from "body-parser";

import commRoutes from "./routes/commRoutes";
import conRoutes from "./routes/conRoutes";
import prodRoutes from "./routes/prodRoutes";
import vehRoutes from "./routes/vehRoutes";

const app = express();
app.use(bodyParser.json());

app.use(commRoutes);
app.use(conRoutes);
app.use(prodRoutes);
app.use(vehRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
