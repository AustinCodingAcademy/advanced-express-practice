import React from 'react'


class ProductDetail extends React.Component {



    render(){
        <div>
            <div>{this.props.product.body}</div>
            <div>{this.props.product.postId}</div>
        </div>
    }
}

export default ProductDetail;