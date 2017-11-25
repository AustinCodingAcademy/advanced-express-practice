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
    getComment(id) {
      var action = getComment(id)
      dispatch(action);
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Comments);
