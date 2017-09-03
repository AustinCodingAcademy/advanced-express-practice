import { connect } from "react-redux";
import Product from "../components/Product";

function mapStateToProps(state) {
  return {
    product: state.product
  };
}

export default connect(mapStateToProps)(Product);
