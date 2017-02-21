import React from 'react';
import Blab from './Blab.jsx';

export default React.createClass({
  render: function() {
    var blabs = this.props.data.map(function(blab) {
      return (
        <Blab key={blab.id} content={blab.content} author={blab.user.handle} />
      );
    });

    return (
      <ul className="blabs-list">
        {blabs}
      </ul>
    );
  }
});
