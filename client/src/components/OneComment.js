import React from "react";


// class OneComment extends Component {
//   constructor(props) {
//     super(props);
//
//     // this.state = {
//     //   fullView: false
//     // };
//   }
//
//   // if(fullView) {
//   //   return
//   // }
//
//   render() {
//     console.log("from OneComment", this.props);
//     return (
//       <div />
//     );
//   }
//
// }

function OneComment(props) {
  // const content = props.match.params.text;
  const comment = props.resultData;
  console.log("this is the comment found", comment);
  if (!comment) {
    return (
      <div>
        <h4>Comment not found</h4>
      </div>
    );
  }
  return (
    <div>
      <p>{comment.body}</p>
      <h6>{comment.postId}</h6>
    </div>
  );
}

export default OneComment;

/*
create this class component and pass to it props from a container or from props
from the CollapsableMapper that give it a function on the button onClick that
triggers the action that shows the content of the item.

Use state to set to false - if false return an empty div. if true return a div
with all the info of the product or comment or whatever.

Repeat for all.

import React from "react";

function Marquee(props) {
  const message = props.match.params.text;
  return (
    <marquee>{message}</marquee>
  );
}

export default Marquee;
*/
