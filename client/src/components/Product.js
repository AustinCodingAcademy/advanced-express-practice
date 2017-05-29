import React from "react";

class Product extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getProduct(id);
  }

  render() {
    const { name, description } = this.props.product;

    return (
      <div>
        <h2>Product Details</h2>
        <p><strong>{name}:</strong> {description}</p>
      </div>

    );
  }
}
export default Product;
