import React from 'react';
import {Link, IndexLink} from 'react-router';

export default React.createClass({
  handleSignOutLink: function() {
    sessionStorage.setItem('jwt','');
    location = '/';
  },

  render: function() {
    var signingLink
      , projectsLink = ""
      , homeLink = ""
    ;

    if (this.props.signedIn) {
      signingLink = <li><span onClick={this.handleSignOutLink}>Sign Out</span></li>;
      projectsLink=  <li><Link  to="/projects">Projects</Link></li>;
    } else {
      signingLink = <li><Link to="login">Login</Link></li>;
      homeLink = <li><Link to="/">Home</Link></li>;
    }
    return (
      <div id="menu">
        <span id="menu-link" onClick={this.props.sendMenuClick}><span></span></span>
        <div id="menu-list">
          <div className="pure-menu pure-menu-open">
            <span className="pure-menu-heading">Qonbit</span>
            <ul>
            {homeLink}
            <li><Link to="about">About</Link></li>
            {projectsLink}
            {signingLink}
            </ul>
          </div>
        </div>
      </div>
    );
  }
});
