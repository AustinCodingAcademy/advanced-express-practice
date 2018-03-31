import { connect } from "react-redux";
import { getContact } from '../actions';
import Contact from "../components/Contact";

function mapStateToProps(state) {
  return {
    contact: state.contact
  };
}

function mapDispatchToProps(dispatch){
  return {
    getContact: function(contact){
      var action = getContact(contact);
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Contact);
