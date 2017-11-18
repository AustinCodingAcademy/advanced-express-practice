import { connect } from "react-redux";
import Product from "../components/Product";
import {getProduct} from "../actions";

function mapStateToProps(state) {
  return {
    product: state.product
  };
}

function mapDispatchToProps(dispatch){
    return {
        getProduct:function(product){
            let action = getProduct(product);
            dispatch(action);
          },
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Product);