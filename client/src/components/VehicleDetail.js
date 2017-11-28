import React from 'react'


class VehicleDetail extends React.Component {



    render(){
        <div>
            <div>{this.props.vehicle.body}</div>
            <div>{this.props.vehicle.postId}</div>
        </div>
    }
}

export default VehicleDetail;