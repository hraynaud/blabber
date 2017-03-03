import React from 'react';
import ProjectFormContainer from './ProjectFormContainer.jsx'

export default React.createClass({
  getInitialState: function() {
    return {data: []};
  },

  componentDidMount: function() {
    //this.readProjectsFromAPI();
  },

  readProjectsFromAPI: function() {
    this.props.readFromAPI(this.props.origin + '/projects', function(projects) {
      this.setState({data: projects});
    }.bind(this));
  },

  render: function() {
    return (
      <div>
        <h1>Projects live here</h1>
        <ProjectFormContainer  writeToAPI={this.props.writeToAPI} />
      </div>
    );
  }
});
