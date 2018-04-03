import React, { Component } from "react";

class Product extends Component {

  componentDidMount() {
    var productId = this.props.match.params.id;
    this.props.getProduct(productId);
  }

  render() {
    return (
      <div>
        <h1>Product</h1>
        <table>
          <tbody>
            <tr>
              <td><b>Name</b></td>
              <td>{this.props.product.name}</td>
            </tr>
            <tr>
              <td><b>Description</b></td>
              <td>{this.props.product.description}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}


export default Product;
