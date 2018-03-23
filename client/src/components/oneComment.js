import React from "react";

class oneComment extends React.Component {
  componentDidMount() {
    this.props.getComment(this.props.match.params.id);
  }

  render() {
    let com = "";
    console.log("oneComment this.props:",this.props);
    if(this.props.comment){
      com = this.props.comment.body;
    }
    //console.log("oneComment this.props.path._id:",this.props.path._id);
    return (
      <div className="oneComment">
        <h2>Selected Comment: {com}</h2>
      </div>
    );
  }
}
export default oneComment;
