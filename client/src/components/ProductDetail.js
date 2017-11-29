import React from 'react'


class ProductDetail extends React.Component {

    componentDidMount(){
        console.log("product props: ", this.props)
        const productId = this.props.match.params.id;
        this.props.getProduct(productId);
    }



    render(){
        <div>
            <div>{this.props.product.body}</div>
            <div>{this.props.product.postId}</div>
        </div>
    }
}

export default ProductDetail;