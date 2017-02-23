require('./assets/app.css');
require('./assets/menu.css');
require('./assets/blabs.css');

import React from 'react';
import {render} from 'react-dom';
import { Router, browserHistory } from 'react-router';
import AppRoutes from './routes.js';

render(AppRoutes,  document.getElementById("root"));


