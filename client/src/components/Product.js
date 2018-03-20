import React, {Component} from 'react';

class Product extends Component {
  componentDidMount() {
    const ProductId = this.props.match.params.id;
    this.props.getProduct(ProductId);
  }

  render() {
    return (
      <div>
        <h3>Name: { this.props.product.name }</h3>
        <h4>Description: { this.props.product.description }</h4>
      </div>
    );
  }
}
export default Product;
