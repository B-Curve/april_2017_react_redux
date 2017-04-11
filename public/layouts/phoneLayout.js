import React from 'react';
import { Route, Redirect, Switch } from 'react-router';
import Home from '../pages/phone/home';
import Join from '../pages/phone/join';
import $ from 'jquery';

class GetDate extends React.Component{
  render(){
    var d = new Date();
    var months = ['Jan','Feb',"Mar",'Apr','May','June','July','Aug','Sep','Oct','Nov','Dec'];
    var date = ''+months[d.getMonth()]+' - '+d.getFullYear()+'';
    return(
      <h1>&copy; Brandon Kervin {date}</h1>
    );
  }
}

export default class PhoneLayout extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      username: ''
    }
    console.warn('MESSAGE TO USER: THIS WEBSITE IS IN DEVELOPMENT.\n\nAlso, please ignore the proptypes warning, I know it\'s there.\n\nVisit http://brandonkervin.com if you want a working website on all devices.');
  }

  componentWillMount(){
    let username;
    let password;
    let email;
    let self = this;
    $.ajax({
      type: 'POST',
      url: '/getAccount',
      data: {username: username, password: password},
      success: function(data){
        self.setState({
          username: data.username,
          password: data.password,
          email: data.email
        });
      }.bind(this)
    });
  }

  doAccount(){
    if(this.state.username == 'Sign-In'){
      window.location.href = 'http://kervingames.com/join';
    }else{
      window.location.href = 'http://kervingames.com/account';
    }
  }

  render(){
    return(
      <div>
        <header className="section-header">
          <h1><a href="http://kervingames.com/">KervinGames</a></h1>
          <img src="/static/images/plane.png" alt="cart" />
          <h2><a onClick={this.doAccount.bind(this)}>{this.state.username}</a></h2>
        </header>
        <section className="section-body">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/join" component={Join} />
          </Switch>
        </section>
        <footer className="section-footer">
          <GetDate />
        </footer>
      </div>
    );
  }
}
