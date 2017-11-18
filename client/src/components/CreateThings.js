import React from "react";

class CreateThings extends React.Component {
  constructor() {
    super();
    this.state = {
      comment: {
        _id: "",
        body: ""
      },
      contact: {
        _id:"",
        name: "",
        occupation: "",
        avatar: ""
      },
      vehicle: {
        _id:"",
        year: "",
        make: "",
        model: ""
      },
      product: {
        _id:"",
        name: "",
        description: ""
      }
    };
  }
  render() {
    return (
      <div>
        <div>
          <h1>Comments</h1>
          <form onSubmit={(e) => {
            e.preventDefault();
            {/* when creating a new object, it isn't updating the ID, so the newly created object has "undefined" as the ID. This
            is a problem when creating multiple new objects, as they all reference undefined, so this logic will increment the ID*/}
            const commentsLength= this.props.comments.length;
            //console.log(commentsLength);
            const comment = {_id: commentsLength+1};
                this.setState({
                  comment: Object.assign(this.state.comment,comment)
                });
            if (this.props.createComment) {
              this.props.createComment(this.state.comment);
            }
          }}>
            <div>
              Body: <input onChange={(e) => {
                const comment = {body: e.target.value};
                this.setState({
                  comment: Object.assign(this.state.comment,comment)
                });
              }} />
            </div>
            <button>Create</button>
          </form>
        </div>
        <div>
          <h1>Contact</h1>
          <form onSubmit={(e) => {
            e.preventDefault();
            {/* when creating a new object, it isn't updating the ID, so the newly created object has "undefined" as the ID. This
            is a problem when creating multiple new objects, as they all reference undefined, so this logic will increment the ID*/}
            const contactsLength= this.props.contacts.length;
            //console.log(contactsLength);
            const contact = {_id: contactsLength+1};
                this.setState({
                  contact: Object.assign(this.state.contact,contact)
                });
            if (this.props.createContact) {
              this.props.createContact(this.state.contact);
            }
          }}>
            <div>
              Name: <input onChange={(e) => {
                const contact = {name: e.target.value};
                this.setState({
                  contact: Object.assign(this.state.contact,contact)
                });
              }} />
            </div>
            <div>
              Occupation: <input onChange={(e) => {
                const contact = {occupation: e.target.value};
                this.setState({
                  contact: Object.assign(this.state.contact,contact)
                });
              }} />
            </div>
            <div>
              Avatar: <input onChange={(e) => {
                const contact = {avatar: e.target.value};
                this.setState({
                  contact: Object.assign(this.state.contact,contact)
                });
              }} />
            </div>
            <button>Create</button>
          </form>
        </div>
        <div>
          <h1>Vehicle</h1>
          <form onSubmit={(e) => {
            e.preventDefault();
             {/* when creating a new object, it isn't updating the ID, so the newly created object has "undefined" as the ID. This
            is a problem when creating multiple new objects, as they all reference undefined, so this logic will increment the ID*/}
            const vehiclesLength= this.props.vehicles.length;
            //console.log(vehiclesLength);
            const vehicle = {_id: vehiclesLength+1};
            this.setState({
                  vehicle: Object.assign(this.state.vehicle,vehicle)
                });
            if (this.props.createVehicle) {
              this.props.createVehicle(this.state.vehicle);
            }
          }}>
            <div>
              Year: <input onChange={(e) => {
                const vehicle = {year: e.target.value};
                this.setState({
                  vehicle: Object.assign(this.state.vehicle,vehicle)
                });
              }} />
            </div>
            <div>
              Make: <input onChange={(e) => {
                const vehicle = {make: e.target.value};
                this.setState({
                  vehicle: Object.assign(this.state.vehicle,vehicle)
                });
              }} />
            </div>
            <div>
              Model: <input onChange={(e) => {
                const vehicle = {model: e.target.value};
                this.setState({
                  vehicle: Object.assign(this.state.vehicle,vehicle)
                });
              }} />
            </div>
            <button>Create</button>
          </form>
        </div>
        <div>
          <h1>Product</h1>
          <form onSubmit={(e) => {
            e.preventDefault();
            {/* when creating a new object, it isn't updating the ID, so the newly created object has "undefined" as the ID. This
            is a problem when creating multiple new objects, as they all reference undefined, so this logic will increment the ID*/}
            const productsLength= this.props.products.length;
            //console.log(productsLength);
            const product = {_id: productsLength+1};
            this.setState({
                  product: Object.assign(this.state.product,product)
                });
            if (this.props.createProduct) {
              this.props.createProduct(this.state.product);
            }
          }}>
            <div>
              Name: <input onChange={(e) => {
                const product = {name: e.target.value};
                this.setState({
                  product: Object.assign(this.state.product,product)
                });
              }} />
            </div>
            <div>
              Description: <input onChange={(e) => {
                const product = {description: e.target.value};
                this.setState({
                  product: Object.assign(this.state.product,product)
                });
              }} />
            </div>
            <button>Create</button>
          </form>
        </div>        
      </div>
      
    );
  }
}
export default CreateThings;
