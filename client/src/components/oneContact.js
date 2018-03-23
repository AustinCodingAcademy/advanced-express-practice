import React from "react";

class oneContact extends React.Component {
  componentDidMount() {
    this.props.getContact(this.props.match.params.id);
  }

  render() {
    let con = "";
    let occ = "";
    console.log("oneContact this.props:",this.props);
    if(this.props.contact){
      con = this.props.contact.name;
      occ = this.props.contact.occupation;
      console.log("oneContact con:",con);
    }
    return (
      <div className="oneContact">
        <h2>Selected Contact: {con}, {occ}</h2>
      </div>
    );
  }
}
export default oneContact;
