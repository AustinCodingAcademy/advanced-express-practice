import React from "react";

class oneProduct extends React.Component {
  componentDidMount() {
    this.props.getProduct(this.props.match.params.id);
  }

  render() {
    let pro = "";
    let des = "";
    console.log("oneProduct this.props:",this.props);
    if(this.props.product){
      pro = this.props.product.name;
      des = this.props.product.description;
    }
    return (
      <div className="oneProduct">
        <h2>Selected Product: {pro}</h2>
        <p>Description: {des}</p>
      </div>
    );
  }
}
export default oneProduct;
