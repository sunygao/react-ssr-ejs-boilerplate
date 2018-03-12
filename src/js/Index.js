import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import Router from '../../router';

import '../scss/app.scss'; // eslint-disable-line


ReactDOM.render(
  <Router />, document.getElementById('root')
);
