import { connect } from "react-redux";
import { getContact } from "../actions";
import Contact from "../components/Contact";

function mapStateToProps(state) {
  return {
    contact: state.contact
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getContact: id => {
      dispatch(getContact(id));
    }
  };
}

const ContactContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Contact);

export default ContactContainer;
