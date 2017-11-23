import React from "react";
import CollapsableMapper from "./CollapsableMapper";

class Products extends React {

  componentDidMount(){

  }

  render(){
    return (
      <CollapsableMapper data={this.props.products} path="product" field="name" />
    );
  }
}
export default Products;
