import React, {Component, PropTypes} from "react";
import CollapsableMapper from "./CollapsableMapper";

class Comments extends Component {

  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.loadComments();
  }
  render() {
    return (
      <CollapsableMapper
        data={this.props.comments}
        path="comment"
        field="body" />
  );
  }
}

Comments.propTypes = {
  comments: PropTypes.array,
  loadComments: PropTypes.func
};
export default Comments;
