var React = require('react');

module.exports = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var content = this.refs.content.value.trim();
    if (!content) {return;}
    if (this.props.signedIn) {
      this.props.optimisticUpdate({id: 'fake-id', content: content, user: this.props.currentUser});
      this.props.writeBlabToAPI(JSON.stringify({blab: {content: content}}));
      this.refs.content.value = '';
      this.refs.content.blur();
    } else {
      alert('Please sign in to blab!');
    }
  },
  render: function() {
    return (
      <form className="blabs-form pure-form" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="start blabbing..." ref="content" />
        <button type="submit" className="pure-button pure-button-primary">Blab</button>
      </form>
    );
  }
});
