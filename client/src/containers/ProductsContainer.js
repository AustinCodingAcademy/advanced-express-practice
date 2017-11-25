import { connect } from "react-redux";
import Products from "../components/Products";
import { getProduct } from "../actions";

function mapStateToProps(state) {
  return {
    products: state.products
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getProduct(id) {
      var action = getProduct(id)
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);

