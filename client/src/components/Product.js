import React, {Component} from "react";



class Product extends React.Component {
constructor(props){
  super();
}
  componentDidMount(){

    this.props.getProduct(this.props.match.params.id);
  }
  render(){
    console.log(this.props.product);
const product = this.props.product;

    return(
      <div>
        <h3>Product Information</h3>
        <br/>
        <p>{product.name}
        <br/>
        <br/>
        {product.description}
        </p>
      </div>
    );
  };
}
export default (Product);
