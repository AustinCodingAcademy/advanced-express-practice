import { connect } from "react-redux";
import Contact from "../components/Contact";

function mapStateToProps(state) {
  return {
    contact: state.contact
  };
}

export default connect(mapStateToProps)(Contact);
