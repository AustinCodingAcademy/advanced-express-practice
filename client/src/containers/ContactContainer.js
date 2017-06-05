import {connect} from "react-redux";
import Contact from "../components/Contact";

function mapStateToProps(state, ownProps) {
  console.log("State from Contact Container", state);

  const idOfData = ownProps.match.params._id;
  const foundData = state.contacts.filter((data) => {
    return String(data._id) === idOfData;
  });
  return {
    resultData: foundData.length ? foundData[0] : null
  };
}

export default connect(mapStateToProps)(Contact);

/*
console.log("ownProps from PRODUCT Container", ownProps);
console.log("state", state);
const idOfData = ownProps.match.params._id;
const foundData = state.products.filter((data) => {
  return String(data._id) === idOfData;
});
return {
  resultData: foundData.length ? foundData[0] : null
};
}

export default connect(mapStateToProps)(Product);*/
