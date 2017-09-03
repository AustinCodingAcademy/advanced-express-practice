import React from "react";
import CollapsableMapper from "./CollapsableMapper";

function Product(props) {
  return (
    <CollapsableMapper data={props.product} path="product" field="name" />
  );
}
export default Product;
