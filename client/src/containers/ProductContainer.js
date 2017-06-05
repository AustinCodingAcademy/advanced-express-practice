import {connect} from "react-redux";
import Product from "../components/Product";

function mapStateToProps(state, ownProps) {
  const idOfData = ownProps.match.params._id;
  const foundData = state.products.filter((data) => {
    return String(data._id) === idOfData;
  });
  return {
    resultData: foundData.length ? foundData[0] : null
  };
}

export default connect(mapStateToProps)(Product);
