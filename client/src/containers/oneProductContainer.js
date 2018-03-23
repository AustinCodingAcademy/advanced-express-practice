import { connect } from "react-redux";
import oneProduct from "../components/oneProduct";
import { getProduct } from "../actions"

function mapStateToProps(state) {
  return {
    product: state.product
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getProduct: function (id) {
      dispatch(getProduct(id));
    }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(oneProduct);
