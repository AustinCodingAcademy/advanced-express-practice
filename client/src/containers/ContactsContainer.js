import { connect } from "react-redux";
import Contacts from "../components/Contacts";
import loadContacts from "../actions"

function mapStateToProps(state) {
  return {
    contacts: state.contacts
  };
}
function mapDispatchToProps(dispatch) {
  return {
    contacts: dispatch(loadContacts)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
