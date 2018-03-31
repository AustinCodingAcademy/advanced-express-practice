import { connect } from "react-redux";
import { getComment } from '../actions';
import Comment from "../components/Comment";

function mapStateToProps(state) {
  return {
    comment: state.comment
  };
}

function mapDispatchToProps(dispatch){
  return {
    getComment: function(comment){
      var action = getComment(comment);
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Comment);
