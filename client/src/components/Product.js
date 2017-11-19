import React, { Component } from "react";

class Product extends Component {
  componentDidMount() {
    const productId = this.props.match.params.id;
    this.props.getProduct(productId);
  }
  render() {
    return <div>{this.props.product.body}</div>;
  }
}

export default Product;
