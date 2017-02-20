require('./assets/app.css');
require('./assets/menu.css');
require('./assets/blabs.css');

var React = require('react');
var ReactDom = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var createHistory = require('history').createHistory;
var routes = require('./config/routes.jsx');

ReactDom.render(<Router history={createHistory()}>{routes}</Router>,  document.getElementById("root"));


