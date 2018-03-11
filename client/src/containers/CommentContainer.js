import { connect } from "react-redux";
import Comment from "../components/Comment";
import {getComment} from "../actions";

function mapStateToProps(state) {
  return {
    comment: state.comment
  };
}

function mapDispatchToProps(dispatch){
    return {
        getComment:function(comment){
            let action = getComment(comment);
            dispatch(action);
          },
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Comment);
