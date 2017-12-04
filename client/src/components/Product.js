import React from "react";

class Product extends React.Component {
  componentDidMount() {
    const productId = this.props.match.params.id;
    this.props.getProduct(productId);
    console.log("product component props: ", this.props.product.name)
    
  }

  render() {
    return (
      <div>
        <div>product name: {this.props.product.name}</div>
        <div>product description: {this.props.product.description}</div>
        <div>product price: {this.props.product.price}</div> 
      </div>
    );
  }
}

export default Product;
