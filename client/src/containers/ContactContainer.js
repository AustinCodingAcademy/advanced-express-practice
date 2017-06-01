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
    getContact: function (id) {
      const action = getContact(id);
      dispatch(action);
    }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Contact);
