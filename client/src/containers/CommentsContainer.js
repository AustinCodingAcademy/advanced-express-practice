import { connect } from "react-redux";
import Comments from "../components/Comments";
import loadComments from "../actions";

function mapStateToProps(state) {
  return {
    comments: state.comments
  };
}
function mapDispatchToProps(dispatch) {
  return {
    comments: dispatch(loadComments)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
