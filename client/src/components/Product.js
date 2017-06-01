import React, { Component } from "react";

class Product extends Component {
  componentDidMount() {
    this.props.getProduct(this.props.match.params.id);
  }
  render() {
    return (
      <div>
        <p>Name: {this.props.product.name}</p>
        <p>Description: {this.props.product.description}</p>
      </div>
    );
  }
}

export default Product;
