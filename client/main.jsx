require('./assets/app.css');
require('./assets/menu.css');
require('./assets/blabs.css');

import React from 'react';
import {render} from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './config/routes.jsx';

render(<Router history={browserHistory}>{routes}</Router>,  document.getElementById("root"));


