import { connect } from "react-redux";
import Contacts from "../components/Contacts";

function mapStateToProps(state) {
  return {
    contacts: state.contacts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getContact(id) {
      var action = getContact(id)
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
