import React from 'react';
import $ from 'jquery';

export default class Home extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      userError: '',
      passError: '',
      confirmError: '',
      emailError: ''
    }
  }

  render(){
    return(
      <div className="home-append">
        <section className="account-container">
          <h1>New User</h1>
          <div className="account-form">
            <input type="text" placeholder="*Enter Username" />
            <h2>{this.state.userError}</h2>
          </div>
          <div className="account-form">
            <input type="password" placeholder="*Enter Password" />
            <h2>{this.state.passError}</h2>
          </div>
          <div className="account-form">
            <input type="password" placeholder="*Confirm Password" />
            <h2>{this.state.confirmError}</h2>
          </div>
          <div className="account-form">
            <input type="email" placeholder="*Enter E-Mail Address" />
            <h2>{this.state.emailError}</h2>
          </div>
        </section>
      </div>
    );
  }
}
