import React from "react";

class Vehicle extends React.Component {
  constructor(props){
    super();
    this.state = {
    };
  }

  componentDidMount(id) {
    this.props.getVehicle(id);
  }

  render(){
    return (
      <div>
        {this.props}
      </div>
    )
  }
}

export default Vehicle;
