import React from "react";
import CollapsableMapper from "./CollapsableMapper";

class Vehicles extends React.Component {

  render() {
    return (
      <CollapsableMapper data={this.props.vehicles} path="vehicle" field="year" field1="make" field2="model"  />
    );
  }
}
export default Vehicles;
