import React from "react";

function Contact(props) {
  const content = props.match.params.text;
  console.log("from Contact Component", content);
  return (
    <div>
      {content}
    </div>
  );
}

export default Contact;
