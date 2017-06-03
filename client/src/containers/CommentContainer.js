import { connect } from 'react-redux';
import Comment from "../components/Comment";
import {getComment} from "../actions";

function mapStateToProps(state) {
  return {
    comment: state.comment
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getComment: function(comment){
      dispatch(getComment(comment));
    }
  }
}

const CommentContainer = connect(mapStateToProps, mapDispatchToProps)(Comment);
export default CommentContainer;