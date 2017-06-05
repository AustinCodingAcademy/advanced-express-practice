import {connect} from "react-redux";
import OneComment from "../components/OneComment";

function mapStateToProps(state, ownProps) {
  const idOfData = ownProps.match.params._id;
  const foundData = state.comments.filter((data) => {
    return String(data._id) === idOfData;
  });
  return {
    resultData: foundData.length ? foundData[0] : null
  };
}

export default connect(mapStateToProps)(OneComment);
