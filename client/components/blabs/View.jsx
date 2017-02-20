var React = require('react');
var BlabsList = require('./List.jsx');
var BlabsForm = require('./Form.jsx');
module.exports = React.createClass({
  render: function() {
    return (
      <div className="blabs-view">
        <BlabsForm writeBlabToAPI={this.props.writeBlabToAPI} optimisticUpdate={this.props.optimisticUpdate} currentUser={this.props.currentUser} signedIn={this.props.signedIn} />
        <BlabsList data={this.props.data} />
      </div>
    );
  }
});
