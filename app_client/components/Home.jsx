import React from 'react';
import {Link } from 'react-router';

export default React.createClass({
  render: function() {
    var link;
    if (this.props.signedIn){
      link = <Link to="projects">Your Projects</Link>;
    }else{
      link = <Link to="login">Login</Link>;
    }
    return (
      <div id="home">
        <h1>Welcome</h1>
        <p>Qonbit helps others help you get shit done!</p>
        {link}
      </div>
    );
  }
});
