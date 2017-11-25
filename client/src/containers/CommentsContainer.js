import { connect } from "react-redux";
import Comments from "../components/Comments";
import { getComment } from "../actions";

function mapStateToProps(state) {
  return {
    comments: state.comments
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getComment(comment) {
      var action = getComment(comment)
      dispatch(action);
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Comments);
