import { connect } from "react-redux";
import {getContact} from "../actions";
import Contacts from "../components/Contacts";

function mapStateToProps(state) {
  return {
    contacts: state.contacts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getContact: function () {
      dispatch(getContact());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
