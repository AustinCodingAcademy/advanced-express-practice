import { connect } from "react-redux";
import oneContact from "../components/oneContact";
import { getContact } from "../actions"

function mapStateToProps(state) {
  return {
    contact: state.contact
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getContact: function (id) {
      dispatch(getContact(id));
    }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(oneContact);
