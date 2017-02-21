import React, {Component} from 'react';
import Uri from 'jsuri';
import Reqwest from 'reqwest';
import Menu from './Menu.jsx'

var App =  React.createClass({

  getDefaultProps: function() {
    return {origin: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : ''};
  },

  getInitialState: function() {
    return {showMenu: false, signedIn: false, currentUser: {handle: ''}};
  },

  componentWillMount: function() {
    var jwt = new Uri(location.search).getQueryParamValue('jwt');
    this.setToken(jwt);
  },

  componentDidMount: function() {
    if (!!sessionStorage.getItem('jwt')) {this.currentUserFromAPI();}
  },

  readFromAPI: function(url, successFunction) {
    Reqwest({
      url: url,
      type: 'json',
      method: 'get',
      contentType: 'application/json',
      headers: {'Authorization': sessionStorage.getItem('jwt')},
      success: successFunction,
      error: function(error) {
        console.error(url, error['response']);
        location = '/';
      }
    });
  },

  writeToAPI: function(method, url, data, successFunction) {
    Reqwest({
      url: url,
      data: data,
      type: 'json',
      method: method,
      contentType: 'application/json',
      headers: {'Authorization': sessionStorage.getItem('jwt')},
      success: successFunction,
      error: function(error) {
        console.error(url, error['response']);
        location = '/';
      }
    });
  },

  currentUserFromAPI: function() {
    this.readFromAPI( this.props.origin + '/current_user', function(user) {
        this.signIn(user);
      }.bind(this));

  },

  setToken: function(jwt){
    if (!!jwt) {
      sessionStorage.setItem('jwt', jwt);
    }
  },

  signIn: function(user){
    this.setState({signedIn: true, currentUser: user});
  },

  handleMenuClick: function() {
    this.setState({showMenu: !this.state.showMenu});
  },

  render: function () {
    var menu = this.state.showMenu ? 'show-menu' : 'hide-menu';
    return (
      <div id="app" className={menu}>
      <Menu origin={this.props.origin} sendMenuClick={this.handleMenuClick} signedIn={this.state.signedIn} />
      <div id="content">

        {
          this.props.children && React.cloneElement(
            this.props.children,
            {
              readFromAPI: this.readFromAPI,
              writeToAPI: this.writeToAPI,
              setToken: this.setToken,
              origin: this.props.origin,
              currentUser: this.state.currentUser,
              signedIn: this.state.signedIn,
            }
          )
        }
      </div>
      </div>
    );
  }
});

export default App;
