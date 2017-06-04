import { connect } from "react-redux";
import Products from "../components/Products";
import loadProducts from "../actions";

function mapStateToProps(state) {
  return {
    products: state.products
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadProducts: dispatch(loadProducts)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
