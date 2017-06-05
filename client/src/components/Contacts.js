import React from "react";
import CollapsableMapper from "./CollapsableMapper";
import PropTypes from "prop-types";

function Contacts(props) {
  return (
    <CollapsableMapper data={props.contacts} path="contact" field="name" />
  );
}

Contacts.propTypes = {
  contacts: PropTypes.array
};

export default Contacts;
