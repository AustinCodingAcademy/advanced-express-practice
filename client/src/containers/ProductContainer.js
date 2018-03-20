import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Product from '../components/Product';
import { getProduct } from '../actions';

const mapStateToProps = (state) => {
  return {
    product: state.product
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getProduct
  }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Product);
