import { connect } from "react-redux";
import Contacts from "../components/Contacts";
import { getContacts } from "../actions";

function mapStateToProps(state) {
  return {
    contacts: state.contacts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getContacts(id) {
      var action = getContacts(id)
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
