import React from 'react';

export default React.createClass({

  getInitialState: function() {
    return { errors: [] };
  },
 
  handleSubmit: function(e) {
    e.preventDefault();
    var email = this.refs.email.getDOMNode().value;
    var password = this.refs.password.getDOMNode().value;
    var credentials = JSON.stringify({email:email, password:password});

    this.props.writeToAPI('post', this.props.origin + '/login', credentials, function(response) {
      if (!!response.jwt) {
        this.props.setToken(response.jwt)
        location = '/';
      }
    }.bind(this));
  },

  render: function() {
    return (
      <div>
       <p>
         Login to your account with your email and password or through Twitter
       </p>
        <form onSubmit={this.handleSubmit}>
        <div className="card--login__field">
        <label name="email">Email</label>
        <input type="text" name="email" ref="email" /> 
        </div>
        <div className="card--login__field">
        <label name="password">Password</label>
        <input type="password" name="password" ref="password" />
        </div>
        <button type="submit" className="card--login__submit">Login</button>
        </form>

        <p>
        <a href={this.props.origin + '/request_token'}>Twitter Login</a>
        </p>
      </div>


    );
  }
});
