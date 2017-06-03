import React from "react";
import ReactDOM from "react-dom";
import AppContainer from "./AppContainer";
import "./index.css";
import store from "./store";
import {Provider} from "react-redux";
// import {getProduct} from "./actions";
//
// store.dispatch(getProduct("592e32e2e8136d1c301ac479"));

ReactDOM.render(
  <Provider store={store}><AppContainer /></Provider>,
  document.getElementById("root")
);
