import { connect } from "react-redux";
import Comment from "../../components/id_components/Comment";
import { getComment } from "../../actions/index"

function mapStateToProps(state) {
  return {
    comment: state.comment,
    id: this.props.match.params.id
  };
}

function mapDispatchToProps(dispatch) {
    return {
        getComment: function(id) {
            dispatch(getComment(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment);