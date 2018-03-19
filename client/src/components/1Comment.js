import React from "react";

class ListToggle extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div onClick={this.handleClick}
        data-toggled={this.state.toggled}
        className="ListToggle">
  
      </div>
    );
  }
}
export default Comment;
