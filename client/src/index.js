import React from "react";
import ReactDOM from "react-dom";
import AppContainer from "./AppContainer";
import "./index.css";
import store from "./store";
import {Provider} from "react-redux";
import {getContact,
  getVehicle
} from "./actions";

store.dispatch(getContact("5931a41216d002da549024d5"));
store.dispatch(getVehicle("5932dc26b8b8ac34d6b70161"));


ReactDOM.render(
  <Provider store={store}><AppContainer /></Provider>,
  document.getElementById("root")
);
