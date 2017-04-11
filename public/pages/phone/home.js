import React from 'react';
import $ from 'jquery';
import Categories from '../addons/categories';

export default class Home extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      location: 'New York City, NY',
      image: 'nyc'
    }
    let self = this;
    const locations = ['New York City, NY','Los Angeles, CA','Minneapolis, MN','Paris, France','Rome, Italy','Cancun, Mexico'];
    const images = ['nyc','la','mn','paris','rome','mex'];
    let counter = 0;
    setInterval(function(){
      if(counter == 6){
        counter = 0;
      }
      self.setState({
        location: locations[counter],
        image: images[counter]
      });
      counter++;
    },4000);
  }

  render(){
    return(
      <div className="home-append">
        <section className="section-container">
          <img src={'/static/images/'+this.state.image+'.jpg'} alt={this.state.image} />
          <h1>Decide where to travel,<br /> the right way</h1>
          <h2>{this.state.location}</h2>
        </section>
        <section className="search-query">
          <input type="text" placeholder="Where to?" />
          <h1>Search</h1>
        </section>
        <Categories />
      </div>
    );
  }
}
