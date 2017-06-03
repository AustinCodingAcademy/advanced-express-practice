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
    createProduct: (product) => {
      dispatch(createProduct(product));
    },
    createVehicle: (v) => {
      dispatch(createVehicle(v));
    },
    createContact: (contact) => {
      dispatch(createContact(contact));
    },
    createComment: (c) => {
      dispatch(createComment(c));
    },
  };
}

export default connect(null,mapDispatchToProps)(CreateThings);
