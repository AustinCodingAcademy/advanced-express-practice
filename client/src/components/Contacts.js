
import React, {Component, PropTypes} from "react";
import CollapsableMapper from "./CollapsableMapper";

class Contacts extends Component {

  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.loadContacts();
  }
  render() {
    return (
      <CollapsableMapper
        data={this.props.contacts}
        path="contact"
        field="name"
      />
    );
  }
}

Contacts.propTypes = {
  contacts: PropTypes.array,
  loadContacts: PropTypes.func
};

export default Contacts;
