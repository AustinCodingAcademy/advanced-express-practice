import React from "react";
import ContactContainer from "../containers/ContactContainer";
import ProductContainer from "../containers/ProductContainer";
import VehicleContainer from "../containers/VehicleContainer";
import CommentContainer from "../containers/CommentContainer";
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
