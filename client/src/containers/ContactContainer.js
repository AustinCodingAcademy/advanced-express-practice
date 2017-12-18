
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
    getContact: function (id) {
      dispatch(getContact(id));
    }

  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Contact);
