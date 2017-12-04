import Product from "../components/Product";
import { connect } from "react-redux";
import { getProduct } from "../actions";

function mapStateToProps(state) {
  return {
    product: state.product,
    useless: "this is a useless prop"
  };
}

function mapDispatchToProps(dispatch) {
  console.log("product container mapping getproduct was called");
  return {
    getProduct: function(id) {
      dispatch(getProduct(id));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
