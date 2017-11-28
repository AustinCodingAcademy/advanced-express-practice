import { connect } from "react-redux";
import {getProduct} from "../actions";
import Products from "../components/Products";

function mapStateToProps(state) {
  return {
    products: state.products
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getProduct: function () {
      dispatch(getProduct());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
