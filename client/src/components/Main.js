import React from "react";
import ContactsContainer from "../containers/ContactsContainer";
import ProductsContainer from "../containers/ProductsContainer";
import VehiclesContainer from "../containers/VehiclesContainer";
import CommentsContainer from "../containers/CommentsContainer";
import CreateThingsContainer from "../containers/CreateThingsContainer";
// import Comment from "./Comment";
// <Route path="/comments/:text" component={Comment} />
import Contact from "./Contact";
import Vehicle from "./Vehicle";
import Product from "./Product";

import {
  BrowserRouter as Router,
  Route,
  /* Switch*/
} from "react-router-dom";

function Contacts() {
  return (
    <Router>
      <div>
        <div style={{float: "left", width: "49%"}}>
          <h1>Comments</h1>

          <CommentsContainer />
          <h1>Contacts</h1>
          <Route path="/contacts/:text" component={Contact} />
          <ContactsContainer />
          <h1>Vehicles</h1>
          <Route path="/vehicles/:text" component={Vehicle} />
          <VehiclesContainer />
          <h1>Products</h1>
          <Route path="/products/:text" component={Product} />
          <ProductsContainer />
        </div>
        <div style={{float: "left", width: "49%"}}>
          <CreateThingsContainer />
        </div>
      </div>
    </Router>
  );
}
export default Contacts;
