import React from 'react';
import { Route, IndexRoute } from 'react-router'

import App from './components/App.jsx';
import LoginForm from './components/Login.jsx';
import About from './components/About.jsx';
import Home from './components/Home.jsx';
import RequiresAuth from './components/RequiresAuth.jsx';
import ProjectsContainer from './components/projects/ProjectsContainer.jsx';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="about" component={About} />
    <Route path="login" component={LoginForm} />
    <Route  component={RequiresAuth} >
      <Route path="projects" component={ProjectsContainer} />
    </Route>
  </Route>
);


