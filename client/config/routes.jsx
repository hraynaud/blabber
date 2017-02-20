var React = require('react');
var Router = require('react-router');
var App = require('../components/layout/App.jsx');
var BlabsViewContainer = require('../components/blabs/ViewContainer.jsx');
var AboutView = require('../components/static/AboutView.jsx');
var LoginForm = require('../components/static/Login.jsx');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

module.exports = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute name="blabs" handler={BlabsViewContainer} />
    <Route name="about" handler={AboutView} />
    <Route name="login" handler={LoginForm} />
  </Route>
);


