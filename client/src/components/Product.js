import React, { Component } from "react";

class Product extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getProduct(id);
  }

  render() {
    const name = this.props.product.name;
    const description = this.props.product.description;
    return (
      <div>
        <h2>Product</h2>
        <ul>
          <li>Name: {name}</li>
          <li>Description: {description}</li>
        </ul>
      </div>
    );
  }
}

export default Product;
