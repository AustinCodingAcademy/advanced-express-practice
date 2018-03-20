import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Comment from '../components/Comment';
import { getComment } from '../actions';

const mapStateToProps = (state) => {
  return {
    comment: state.comment
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getComment
  }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Comment);
