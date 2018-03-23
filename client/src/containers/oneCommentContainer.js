import { connect } from "react-redux";
import oneComment from "../components/oneComment";
import { getComment } from "../actions"

function mapStateToProps(state) {
  return {
    comment: state.comment
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getComment: function (id) {
      dispatch(getComment(id));
    }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(oneComment);
