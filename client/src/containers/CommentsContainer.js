import { connect } from "react-redux";
import Comments from "../components/Comments";

function mapStateToProps(state) {
  return {
    comments: state.comments
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onMount: () => {
      console.log("Comment did load in Comment Container");
    }
  };
}

/*
function mapDispatchToProps(dispatch) {
  return {
    onMount: () => {
      console.log("Did load in Contacts Container");
      dispatch(contactLoadStart());
    }
  };
}
*/

export default connect(mapStateToProps, mapDispatchToProps)(Comments);

// logical conjuction
