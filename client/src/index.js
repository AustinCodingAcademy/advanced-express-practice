import React from "react";
import ReactDOM from "react-dom";
import AppContainer from "./AppContainer";
import "./index.css";
import store from "./store";
import {Provider} from "react-redux";

import mongoose from "mongoose";
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://<dbuser>:<dbpassword>@ds129394.mlab.com:29394/austin-prod");


ReactDOM.render(
  <Provider store={store}><AppContainer /></Provider>,
  document.getElementById("root")
);
