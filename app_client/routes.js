import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router'

import App from './components/App.jsx';
import LoginForm from './components/Login.jsx';
import About from './components/About.jsx';
import Home from './components/Home.jsx';
import RequiresAuth from './components/RequiresAuth.jsx';
import ForbidsAuth from './components/ForbidsAuth.jsx';
import ProjectsContainer from './components/projects/ProjectsContainer.jsx';


export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route  component={ForbidsAuth} >
        <Route path="login" component={LoginForm} />
      </Route>
      <Route  component={RequiresAuth} >
        <Route path="projects" component={ProjectsContainer} />
      </Route>
    </Route>
  </Router>
);



