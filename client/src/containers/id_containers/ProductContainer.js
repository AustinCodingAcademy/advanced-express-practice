import { connect } from "react-redux";
import Product from "../../components/id_components/Product";
import { getProduct } from "../../actions/index";

function mapStateToProps(state) {
  return {
    product: state.product,
    id: this.props.match.params.id
  };
}

function mapDispatchToProps(dispatch) {
    return {
        getProduct: function(id) {
            dispatch(getProduct(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);