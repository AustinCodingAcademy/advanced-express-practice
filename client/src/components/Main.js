import React from "react";
import ContactsContainer from "../containers/ContactsContainer";
import ProductsContainer from "../containers/ProductsContainer";
import VehiclesContainer from "../containers/VehiclesContainer";
import CommentsContainer from "../containers/CommentsContainer";
import CreateThingsContainer from "../containers/CreateThingsContainer";
import OneCommentContainer from "../containers/OneCommentContainer";
import Contact from "./Contact";
import Vehicle from "./Vehicle";
import Product from "./Product";

import {
  BrowserRouter as Router,
  Route,
  /* Switch*/
} from "react-router-dom";

function Main() {
  return (
    <Router>
      <div>
        <div style={{float: "left", width: "49%"}}>
          <h1>Comments</h1>
          <Route path="/comment/:_id" component={OneCommentContainer} />
          <CommentsContainer />
          <h1>Contacts</h1>
          <Route path="/contact/:_id" component={Contact} />
          <ContactsContainer />
          <h1>Vehicles</h1>
          <Route path="/vehicle/:_id" component={Vehicle} />
          <VehiclesContainer />
          <h1>Products</h1>
          <Route path="/product/:_id" component={Product} />
          <ProductsContainer />
        </div>
        <div style={{float: "left", width: "49%"}}>
          <CreateThingsContainer />
        </div>
      </div>
    </Router>
  );
}
export default Main;
