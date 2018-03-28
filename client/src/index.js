import React from "react";
import ReactDOM from "react-dom";
import AppContainer from "./AppContainer";
import "./index.css";
import store from "./store";
import {Provider} from "react-redux";

function helloWorld(){
  console.log("Hello index.js");
}

helloWorld();

ReactDOM.render(
  <Provider store={store}><AppContainer /></Provider>,
  document.getElementById("root")
);
