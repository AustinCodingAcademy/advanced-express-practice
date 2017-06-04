import React from "react";
import ReactDOM from "react-dom";
import AppContainer from "./AppContainer";
import "./index.css";
import store from "./store";
import {Provider} from "react-redux";
// import {getProduct, getVehicle, getComment, getContact} from "./actions";
//
// store.dispatch(getProduct("592e32e2e8136d1c301ac479"));
// store.dispatch(getVehicle("5932388650883421d71558d9"));
// store.dispatch(getComment("592e3277b9aea31ba6d6576d"));
// store.dispatch(getContact("592e3245b9aea31ba6d6576c"));

ReactDOM.render(
  <Provider store={store}><AppContainer /></Provider>,
  document.getElementById("root")
);
