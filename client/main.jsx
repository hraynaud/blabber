require('./assets/app.css');
require('./assets/menu.css');
require('./assets/blabs.css');

var React = require('react');
var ReactDom = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var history = ReactRouter.browserHistory;
var routes = require('./config/routes.jsx').default;

ReactDom.render(<Router history={history}>{routes}</Router>,  document.getElementById("root"));


