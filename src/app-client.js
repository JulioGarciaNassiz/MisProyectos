'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './components/AppRoutes';
import 'bootstrap/dist/css/bootstrap.css'

window.onload = () => {
  ReactDOM.render(<AppRoutes/>, document.getElementById('main'));
};
 