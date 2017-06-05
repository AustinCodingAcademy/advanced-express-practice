import {connect} from "react-redux";
import Product from "../components/Product";

function mapStateToProps(state, ownProps) {
  console.log("ownProps from PRODUCT Container", ownProps);
  console.log("state", state);
  const idOfData = ownProps.match.params._id;
  const foundData = state.products.filter((data) => {
    return String(data._id) === idOfData;
  });
  return {
    resultData: foundData.length ? foundData[0] : null
  };
}

export default connect(mapStateToProps)(Product);


/*
import {connect} from "react-redux";
import OneComment from "../components/OneComment";

function mapStateToProps(state, ownProps) {
  console.log("HI", ownProps.match.params._id);
  console.log("Hi again state", state);
  const idOfData = ownProps.match.params._id;
  const foundData = state.comments.filter((data) => {
    return String(data._id) === idOfData;
  });
  return {
    resultData: foundData.length ? foundData[0] : null
  };
}

export default connect(mapStateToProps)(OneComment);
*/
