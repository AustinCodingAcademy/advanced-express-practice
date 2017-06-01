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
    getComment: function (id) {
      const action = getComment(id);
      dispatch(action);
    }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Comment);
