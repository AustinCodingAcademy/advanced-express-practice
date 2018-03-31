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
        <img src={this.props.product.imgUrl} alt={this.props.product.name} />
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
            <tr>
              <td><b>Rating</b></td>
              <td>{this.props.product.rating}</td>
            </tr>
            <tr>
              <td><b>Price</b></td>
              <td>{this.props.product.price}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}


export default Product;
