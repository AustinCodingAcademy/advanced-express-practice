import ProductDetail from '../components/ProductDetail';
import { connect } from 'react-redux';
import { getProduct } from '../actions'



function mapStateToProps(state){
    return {
        product: state.products
    }
}

function mapDispatchToProps(dispatch){
    return {
        getProduct: function(id){
            let action = getProduct(id);
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);