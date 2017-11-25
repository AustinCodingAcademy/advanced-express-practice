import React from "react";


class Contact extends React.Component {
  componentDidMount() {
    var productid = this.props.match.params.id
    this.props.getContac(productid);
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
