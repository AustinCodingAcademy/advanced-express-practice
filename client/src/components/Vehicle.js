import React from "react";

function Vehicle(props) {
  const content = props.match.params.text;
  console.log("from Vehicle Component", content);
  return (
    <div>
      {content}
    </div>
  );
}

export default Vehicle;
