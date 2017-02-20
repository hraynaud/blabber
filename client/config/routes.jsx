var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;


var App = require('../components/layout/App.jsx');
var BlabsViewContainer = require('../components/blabs/ViewContainer.jsx');
var AboutView = require('../components/static/AboutView.jsx');
var LoginForm = require('../components/static/Login.jsx');

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={BlabsViewContainer} />
    <Route path="about" component={AboutView} />
    <Route path="login" component={LoginForm} />
  </Route>
);


