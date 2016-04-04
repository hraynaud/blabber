var React = require('react');

var LoginForm = React.createClass({

  getInitialState: function() {
    return { errors: [] };
  },
 
  handleSubmit: function(e) {
    console.log("submit");
    e.preventDefault();
    var email = this.refs.email.getDOMNode().value;
    var password = this.refs.password.getDOMNode().value;
    var credentials = JSON.stringify({email:email, password:password});
    this.props.writeToAPI('post', this.props.origin + '/login', credentials, function(response) {
    });
  },

  render: function() {
    return (
      <div>
        {this.props.origin}
 
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
      </div>
    );
  }
});

module.exports = LoginForm;
