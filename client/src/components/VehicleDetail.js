import React, {Component} from 'react'


class VehicleDetail extends React.Component {

    componentDidMount(){
        console.log("vehicle props: ", this.props)
        const vehicleId = this.props.match.params.id;
        this.props.getVehicle(vehicleId);
    }



    render(){
        <div>
            <div>{this.props.vehicle.body}</div>
            <div>{this.props.vehicle.postId}</div>
        </div>
    }
}

export default VehicleDetail;