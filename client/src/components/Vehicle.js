import React, {Component} from "react";

class Vehicle extends Component {
    componentDidMount() {
        this.props.getVehicle(this.props.match.params.id);
    }

    render() {
        return (
            <div>
                <p>Make: {this.props.vehicle.make}</p>
                <p>Year: {this.props.vehicle.year}</p>
                <p>Model: {this.props.vehicle.model}</p>
            </div>
        );
    }
}

export default Vehicle;