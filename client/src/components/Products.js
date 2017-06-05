import React from "react";
import CollapsableMapper from "./CollapsableMapper";
import PropTypes from "prop-types";

function Products(props) {
  return (
    <CollapsableMapper data={props.products} path="product" field="name" />
  );
}

Products.propTypes = {
  products: PropTypes.array
};

export default Products;
