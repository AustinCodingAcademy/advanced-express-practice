import { connect } from "react-redux";
import { getProduct } from '../actions';
import Product from "../components/Product";

function mapStateToProps(state) {
  return {
    product: state.product
  };
}

function mapDispatchToProps(dispatch){
  return {
    getProduct: function(product){
      var action = getProduct(product);
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Product);
