import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Contact from '../components/Contact';
import { getContact } from '../actions';

const mapStateToProps = (state) => {
  return {
    contact: state.contact
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getContact
  }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Contact);
