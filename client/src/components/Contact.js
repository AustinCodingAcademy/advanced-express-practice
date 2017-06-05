import React from "react";
import PropTypes from "prop-types";

function Contact(props) {
  const contact = props.resultData;
  if (!contact) {
    return (
      <div>
        <h4>Contact is not found</h4>
      </div>
    );
  }
  return (
    <div>
      <h4>{contact.name}</h4>
      <h5>{contact.occupation}</h5>
    </div>
  );
}

Contact.propTypes = {
  resultData: PropTypes.object
};

export default Contact;
