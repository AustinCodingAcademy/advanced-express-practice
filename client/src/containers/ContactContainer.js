import { connect } from "react-redux";
import Contact from "../components/Contact";
import { getContact } from "../actions";

function mapStateToProps(state) {
  return {
    contact: state.contact
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getContact: (id) => {
      const action = getContact(id);
      dispatch(action);
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact);