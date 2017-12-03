import { connect } from "react-redux";
import CommentSingle from "../components/CommentSingle";
import { getComment } from "../actions";

function mapStateToProps(state) {
  return {
    comment: state.comment
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getComment: function (id) {
      dispatch(getComment(id));
      // const action = getComment(id);
      // dispatch(action);
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentSingle);
