import { connect } from "react-redux";
import Products from "../components/Products";
import { getProducts } from "../actions";

function mapStateToProps(state) {
  return {
    products: state.products
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getProducts(id) {
      var action = getProducts(id)
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);

