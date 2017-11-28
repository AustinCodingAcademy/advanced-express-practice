import React from "react";
import CollapsableMapper from "./CollapsableMapper";

class Products extends React.Component {
  

  render(){
    return (
      <CollapsableMapper data={this.props.products} path="product" field="name" />
    );
  }
}
export default Products;
