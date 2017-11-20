import React from "react";

class Product extends React.Component {

  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.getProduct(id);
  }

  render(){
    return (
      <div>
        <h2>{this.props.product.name}</h2>
        <h3>{this.props.product.description}</h3>
        <h4>Category: {this.props.product.category}</h4>
        <p>{this.props.product.price}</p>
        <p>{this.props.product.reviews}</p>
      </div>
    )
  }
}

export default Product;
