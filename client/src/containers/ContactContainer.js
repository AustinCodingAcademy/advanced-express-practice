import { connect } from 'react-redux';
import Contact from "../components/Contact";
import {getContact} from "../actions";

function mapStateToProps(state){
  return {
    contact: state.contact
  }
}

function mapDispatchToProps(dispatch){
  return {
    getContact:function(contact){
      dispatch(getContact(contact));
    }
  }
}

const ContactContainer = connect(mapStateToProps, mapDispatchToProps)(Contact);
export default ContactContainer;
