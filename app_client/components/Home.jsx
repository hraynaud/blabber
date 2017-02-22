import React from 'react';
import {Link } from 'react-router';

export default React.createClass({
  render: function() {
    return (
      <div id="home">
        <h1>Welcome</h1>
        <p>Qonbit helps others help you get shit done!</p>
        <Link to="login">Login</Link> or <Link to="login">Register</Link>
      </div>
    );
  }
});
