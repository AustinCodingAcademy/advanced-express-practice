import React from "react";

function Product(props) {
  const product = props.resultData;
  console.log("this is the PRODUCT found", product);
  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <ul>
        <li>{product.rating}</li>
        <li>{product.price}</li>
        <li>{product.category}</li>
      </ul>
    </div>
  );
}

export default Product;

/*


    <ul>
      {product.reviews.map(function (listValue, i) {
        return <li key={i}>{listValue}</li>;
      })}
    </ul>

    "_id" : ObjectId("5931c83661de5f4fbd4073af"),
    "name" : "LBel",
    "description" : "2-Propanol",
    "rating" : 3,
    "imgUrl" : "http://dummyimage.com/212x144.jpg/ff4444/ffffff",
    "price" : "$99.91",
    "category" : "sporting",
    "reviews" : [
        {
            "description" : "architect revolutionary deliverables",
            "rating" : 2,
            "_id" : ObjectId("5931c83661de5f4fbd4073b2")
        },
        {
            "description" : "orchestrate dynamic schemas",
            "rating" : 2,
            "_id" : ObjectId("5931c83661de5f4fbd4073b1")
        },
        {
            "description" : "aggregate integrated convergence",
            "rating" : 4,
            "_id" : ObjectId("5931c83661de5f4fbd4073b0")
        }
    ],
    "__v" : 0
*/
