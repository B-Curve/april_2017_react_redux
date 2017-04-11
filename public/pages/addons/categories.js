import React from 'react';

export default class Categories extends React.Component{
  render(){
    return(
      <section className="find-destinations">
        <h1>Explore by vacation type</h1>
        <div className="category-selector">
          <section className="category">
            <h1>Beach</h1>
            <span>&rarr;</span>
          </section>
          <section className="category">
            <h1>Urban</h1>
            <span>&rarr;</span>
          </section>
          <section className="category">
            <h1>International</h1>
            <span>&rarr;</span>
          </section>
          <section className="category">
            <h1>Cold Climate</h1>
            <span>&rarr;</span>
          </section>
          <section className="category">
            <h1>Rural</h1>
            <span>&rarr;</span>
          </section>
          <section className="category">
            <h1>Surprise Me</h1>
            <span>&rarr;</span>
          </section>
        </div>
      </section>
    );
  }
}
