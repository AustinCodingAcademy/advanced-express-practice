import { connect } from "react-redux";
import CreateThings from "../components/CreateThings";
import {
  createProduct,
  createVehicle,
  createContact,
  createComment
} from "../actions";

function mapDispatchToProps(dispatch) {
  return {
    createProduct: function (prod) {
      dispatch(createProduct(prod));
    },
    createVehicle: function (veh) {
      dispatch(createVehicle(veh));
    },
    createContact: function (contact) {
      dispatch(createContact(contact));
    },
    createComment: function (comm) {
      dispatch(createComment(comm));
    },
  };
}

export default connect(null,mapDispatchToProps)(CreateThings);
