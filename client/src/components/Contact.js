import React from "react";

function Contact(props) {
  const content = props.match.params.text;
  const contact = props.resultData;
  console.log("from Contact Component", content);
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

export default Contact;
