import React from "react";
import CollapsableMapper from "./CollapsableMapper";

function Vehicles(props) {
  return (
    <CollapsableMapper data={props.vehicles} path="vehicle" field="year" field1="make" field2="model"  />
  );
}
export default Vehicles;

import React, { Component } from "react";

class Vehicle extends Component {

  componentDidMount() {
    const CommentId = this.props.match.params.id;
    this.props.getComment(CommentId);
  }

  render() {
    return (
      <div>
        <h2>Name: {this.props.product.name}</h2>
        <div>Desc: {this.props.product.description}</div>
      </div>
    );
  }
}
export default Product;
