import { connect } from "react-redux";
import { getComment } from "../actions";
import Comment from "../components/Comment";

function mapStateToProps(state) {
  return {
    comment: state.comment
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getComment: id => {
      dispatch(getComment(id));
    }
  };
}

const CommentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Comment);

export default CommentContainer;
