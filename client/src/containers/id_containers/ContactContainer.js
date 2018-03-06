import { connect } from "react-redux";
import Contact from "../../components/id_components/Contact";
import { getContact } from "../../actions/index";

function mapStateToProps(state) {
  return {
    contact: state.contact,
    id: this.props.match.params.id
  };
}

function mapDispatchToProps(dispatch) {
    return {
        getContact: function(id) {
            dispatch(getContact(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact);