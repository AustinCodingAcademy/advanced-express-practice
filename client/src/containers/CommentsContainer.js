import { connect } from "react-redux";
import {getComment} from "../actions";
import Comments from "../components/Comments";

function mapStateToProps(state) {
  return {
    comments: state.comments
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getComment: function () {
      dispatch(getComment());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
