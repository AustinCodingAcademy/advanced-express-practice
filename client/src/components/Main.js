import React from "react";
import ContactsContainer from "../containers/ContactsContainer";
import ProductsContainer from "../containers/ProductsContainer";
import VehiclesContainer from "../containers/VehiclesContainer";
import CommentsContainer from "../containers/CommentsContainer";
import CreateThingsContainer from "../containers/CreateThingsContainer";
import OneCommentContainer from "../containers/OneCommentContainer";
import ContactContainer from "../containers/ContactContainer";
import VehicleContainer from "../containers/VehicleContainer";
import ProductContainer from "../containers/ProductContainer";

import {
  BrowserRouter as Router,
  Route,
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
          <Route path="/contact/:_id" component={ContactContainer} />
          <ContactsContainer />
          <h1>Vehicles</h1>
          <Route path="/vehicle/:_id" component={VehicleContainer} />
          <VehiclesContainer />
          <h1>Products</h1>
          <Route path="/product/:_id" component={ProductContainer} />
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
