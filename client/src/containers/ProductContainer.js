import { connect } from "react-redux";
import { getProduct } from "../actions";
import Product from "../components/Product";

function mapStateToProps(state) {
  return {
    product: state.product
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getProduct: id => {
      dispatch(getProduct(id));
    }
  };
}

const ProductContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Product);

export default ProductContainer;
