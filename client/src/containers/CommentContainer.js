import { connect } from "react-redux";
import Comment from "../components/Comment";

function mapStateToProps(state) {
  return {
    comment: state.comment
  };
}

export default connect(mapStateToProps)(Comment);
