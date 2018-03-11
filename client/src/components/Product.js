import React, { Component } from "react";


class Product extends Component {

  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.getProduct(id);
  }

  render() {
    let reviewsArr = [];
    if (typeof this.props.product.reviews !== 'undefined'){
      reviewsArr = this.props.product.reviews;
    }
    const reviews = reviewsArr.map((review,key) =>{
      return <div><b>Review {key+1}:</b> {review.description} ,  <b>Rating:</b> {review.rating}</div>
    });
    // console.log(this.props.product);
    // console.log('reviewsArr: ',reviewsArr);
    // console.log(this.props.match.params.id);
    return (
      <div>
        <div><b>ID:</b> {this.props.product._id}</div>
        <div><b>Rating:</b> {this.props.product.rating}</div>
        <div><b>Price:</b> {this.props.product.price}</div>
        <div><b>Name:</b> {this.props.product.name}</div>
        <div><b>Description:</b> {this.props.product.description}</div>
        <div><b>Category:</b> {this.props.product.category}</div>
        <div><img src={this.props.product.imgUrl} alt="" /></div>
        {reviews}
      </div>
    );
  }
}
export default Product;
