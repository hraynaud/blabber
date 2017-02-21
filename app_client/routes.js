import React from 'react';
import { Route, IndexRoute } from 'react-router'

import App from './components/App.jsx';
import LoginForm from './components/Login.jsx';
import BlabsViewContainer from './components/blabs/ViewContainer.jsx';
import AboutView from './components/AboutView.jsx';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={BlabsViewContainer} />
    <Route path="about" component={AboutView} />
    <Route path="login" component={LoginForm} />
  </Route>
);


