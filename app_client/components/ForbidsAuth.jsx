import React from 'react';
import {Link, browserHistory } from 'react-router';

class ForbidsAuthContainer extends React.Component {
  componentWillMount() {

    if (this.props.signedIn) {
      browserHistory.replace("/projects")
    }

  }

  render() {
    if (this.props.signedIn) {
      return  this.props.children && React.cloneElement(
        this.props.children,
        {
          readFromAPI: this.props.readFromAPI,
          writeToAPI: this.props.writeToAPI,
          setToken: this.props.setToken,
          origin: this.props.origin,
          currentUser: this.props.currentUser,
          signedIn: this.props.signedIn,
        }
      );

    } else {
      return null
    }
  }
}

export default ForbidsAuthContainer
