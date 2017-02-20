import React from 'react';
import BlabsList from './List.jsx';
import BlabsForm from './Form.jsx';

export default React.createClass({
  render: function() {
    return (
      <div className="blabs-view">
        <BlabsForm writeBlabToAPI={this.props.writeBlabToAPI} optimisticUpdate={this.props.optimisticUpdate} currentUser={this.props.currentUser} signedIn={this.props.signedIn} />
        <BlabsList data={this.props.data} />
      </div>
    );
  }
});
