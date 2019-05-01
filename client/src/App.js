
// eslint-disable-next-line react/jsx-tag-spacing
import React, { Component } from "react";
import "./App.css";
import Carousel from "react-img-carousel";
require("react-img-carousel/lib/carousel.css");




class App extends Component {
  state = {
    businessess: [],
    homePage: false
  }

  constructor() {
    super();
    this.fetchBusinesses = this.fetchBusinesses.bind(this);
    this.handleCity = this.handleCity.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
  }


  componentDidMount() {
    // this.fetchBusinesses();
  }

  renderCarosel(){
    if (this.state.homePage) {
      return null;
    }
    return (
    <Carousel  dots={false} lazyLoad arrows={false} autoplay autoplaySpeed={3000} slideWidth={450} slideHeight={450} viewportWidth="400px" cellPadding={5}>
    <img height='300px' src='https://cmea.georgetown.edu/wp-content/uploads/sites/35/2018/11/bh_group_fall.jpg'/>
    <img height='300px' src='https://i.pinimg.com/originals/d8/e8/60/d8e860daa96e9a71e5ae57dbbe771c1a.jpg'/>
    <img height='300px' src='https://media.istockphoto.com/photos/african-american-hipster-man-with-two-beautiful-woman-picture-id899893618?k=6&m=899893618&s=612x612&w=0&h=UMwRFMkh3FXPv6mf95zyrhxb_TK2MpSSCX0VdnWsRPE='/>
    <img height='300px' src='https://ct.counseling.org/wp-content/uploads/2012/04/dreamstime_m_12725837.gif'/>
    <img height='300px' src='http://www.socialpoliticalcommentary.com/wp-content/uploads/2017/09/black-men-suits.jpg'/>
    <img height='300px' src='http://blackmeninamerica.com/wp-content/uploads/2015/03/Business-People.jpg'/>
    <img height='300px' src='https://blackonomy1.files.wordpress.com/2009/04/harlem-heighs.jpg'/>
    <img height='300px' src='https://www.philly.com/resizer/STp9Tg53r2XyPvq6_VEZxdeggh4=/1400x932/smart/arc-anglerfish-arc2-prod-pmn.s3.amazonaws.com/public/65WQJ5BUJ5GYHL322DFU4SH64U.jpg'/>
    <img height='300px' src='https://360.ucsf.edu/sites/360.ucsf.edu/files/styles/hero-picture__1x_desktop__1200x500_/public/Group%20of%20Black%20friends_MOCP_HERO.jpg?itok=bU1bjxFT&timestamp=1448360752'/>
    <img height='300px' src='https://static1.squarespace.com/static/56de24bb4c2f8575df8c9d8e/t/58b61e289de4bb01364460b3/1488330395089/Group+of+Black+Women.jpg'/>
    </Carousel>
  );}
  
  
 // Handles Change For City/Category Dropdown 
  handleCity(event){
    const city = event.target.value;
    this.setState({
      city
    });
    console.log(this.state);
  }

  handleCategory(event){
    const category = event.target.value;
    this.setState({
      category
    });
  }


  fetchBusinesses() {
    const that = this;
    fetch('http://localhost:3001/business')
    .then((response) => {
      return response.json();
    })
    .then((businesses) => {
      // console.log(JSON.stringify(businesses));
      const filtered = businesses.filter(b => b.City === that.state.city && b.Category === that.state.category);
      that.setState({
        businessess: filtered,
        homePage: true
      });
    });
  }

 // Header Text On The Page
  render() {
    return (
      <div className="textBody">

        <h1>All Black Everything Application</h1>
        <h4>created by: Lawerence Williams</h4>

      

        City:
        <select onChange={
          this.handleCity
        }>
          <option>Select</option>
          <option>Austin</option>
          <option>Houston</option>
          <option>Dallas</option>
          <option>Atlanta</option>
          <option>Oakland</option>
          <option>Miami</option>
        </select>
        Category:
        <select onChange={
          this.handleCategory
        }>
          <option>Select</option>
          <option>Services</option>
          <option>Food</option>
          <option>Retail</option>
          <option>Health / Wellness</option>
          <option>Kid Friendly</option>
          <option>Community</option>
          <option>Beauty / Hair</option>
          <option>Jewelry / Accessories</option>
        </select>
        <button onClick={this.fetchBusinesses}>Enter</button>

        <div>{this.renderCarosel()}</div>

        {
          this.state.businessess.map(businessObj => {
            console.log(businessObj)
            return (
              <div className="spacer">
                <h2>{businessObj.Business}</h2>
                <h3>Owner: {businessObj.Owner}</h3>
                <h3>Category: {businessObj.Category}</h3>
                <h3>Website: <a target="_blank" href={businessObj.Website}>{businessObj.Website}</a></h3>
              </div>
            )
          })
        }
     

      </div>
    );
  }
}

export default App;
