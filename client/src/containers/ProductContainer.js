import { connect } from 'react-redux';
import Product from "../components/Product";
import {getProduct} from "../actions";

function mapStateToProps(state){
  return {
    product: state.product
  }
}

function mapDispatchToProps(dispatch){
  return {
    getProduct:function(id){
      dispatch(getProduct(id));
    }
  }
}

const ProductContainer = connect(mapStateToProps, mapDispatchToProps)(Product);
export default ProductContainer;