import React from 'react';

export default  React.createClass({
  render: function() {
    return (
      <form  ref="projectForm" onSubmit={this.props.submitHandler}>
        <input type="text" placeholder="Project Name" name="name" ref="name" />
        <textarea  placeholder="Describe your project" name="description" ref="description"> </textarea>
        <button type="submit" className="">Create</button>
      </form>
    );
  }
});
