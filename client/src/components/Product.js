import React from "react";

function Product(props) {
  const content = props.match.params.text;
  console.log("from Product Component", content);
  return (
    <div>
      {content}
    </div>
  );
}

export default Product;
