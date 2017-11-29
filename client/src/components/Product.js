
import React, { Component } from "react";

class Product extends Component {
 
   componentDidMount() {
     let myId = this.props.match.params.id;
     this.props.getProduct(myId);
   }
   render() {
     return (
       <div> 
         <div>{this.props.product.name}</div>
         <div>{this.props.product.description}</div>
       </div>
     );
   }
   
}

export default Product;