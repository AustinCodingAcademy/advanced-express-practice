import React, {Component, PropTypes} from "react";
import CollapsableMapper from "./CollapsableMapper";

class Products extends Component {

  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.loadProducts();
  }
  render() {
    return (
      <CollapsableMapper
        data={this.props.products}
        path="product"
        field="name"
      />
    );
  }
}

Products.propTypes = {
  products: PropTypes.array,
  loadProducts: PropTypes.func
};
export default Products;
