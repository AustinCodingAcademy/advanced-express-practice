import React, { Component } from "react";

class Product extends Component {

  componentDidMount() {
    const ProductId = this.props.match.params.id;
    this.props.getProduct(ProductId);
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
