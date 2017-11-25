import React from "react";


class Products extends React.Component {
  componentDidMount() {
    let productid = this.props.match.params.id;
    this.props.getContact(productid);
  }
  render() {
    return (
      <div>
        <div>{this.props.product.name}</div>
        <div>{this.props.contact.occupation}</div>
        <div>{this.props.contact.price}</div>
      </div>
    );
  }
}

export default Products;
