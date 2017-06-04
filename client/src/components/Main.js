import React from "react";
import ContactContainer from "../containers/ContactsContainer";
import ProductContainer from "../containers/ProductsContainer";
import VehicleContainer from "../containers/VehiclesContainer";
import CommentContainer from "../containers/CommentsContainer";
import CreateThingsContainer from "../containers/CreateThingsContainer";

function Main() {
  return (
    <div>
      <div style={{float: "left", width: "49%"}}>
        <h1>Comments </h1>
        <CommentContainer />
        <h1>Contacts</h1>
        <ContactContainer />
        <h1>Vehicles</h1>
        <VehicleContainer />
        <h1>Products</h1>
        <ProductContainer />
      </div>
      <div style={{float: "left", width: "49%"}}>
        <CreateThingsContainer />
      </div>
    </div>
  );
}
export default Main;
