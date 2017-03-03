import React from 'react';
import ProjectForm from './projectForm.jsx';
import serializeForm from '../../lib/utils';


export default React.createClass({
  validate: function(){
   //TODO implmement
  },


  handleSubmit: function(e) {
    e.preventDefault();
    var data  = serializeForm(e.target, "project");
    this.props.writeToAPI('post', '/projects', data, function(project) {

   //TODO implmement
    }.bind(this));
  },
  render: function() {
    return (
      <ProjectForm submitHandler={this.handleSubmit}/>
    );
  }
});


