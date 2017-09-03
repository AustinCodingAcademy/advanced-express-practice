import React from "react";
import CollapsableMapper from "./CollapsableMapper";

function Contact(props) {
  return (
    <CollapsableMapper data={props.contact} path="contact" field="name" />
  );
}
export default Contact;
