import React, { Component } from "react";

class Product extends Component {

  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.getProduct(id);
  }

  render() {
    let reviewsArray = [];
    if (typeof this.props.product.reviews !== 'undefined'){
      reviewsArray = this.props.product.reviews;
    }
    let reviews = reviewsArray.map(function (review,i){
      return <div><b>Review {i+1}:</b> {review.description} <b>Rating:</b> {review.rating}</div>
    });
    //console.log(this.props.match.params.id);
    return (
      <div>
        <div><b>ID:</b> {this.props.product._id}</div>
        <div><b>name:</b> {this.props.product.name}</div>
        <div><b>description:</b> {this.props.product.description}</div>
        <div><b>rating:</b> {this.props.product.rating}</div>
        <div><b>imgUrl:</b> {this.props.product.imgUrl}</div>
        <div><b>price:</b> {this.props.product.price}</div>
        <div><b>category:</b> {this.props.product.category}</div>
        <div><b>Number of Reviews:</b> {this.props.product.reviewsNumber}</div>
        {reviews}
      </div>
    );
  }
}
export default Product;
