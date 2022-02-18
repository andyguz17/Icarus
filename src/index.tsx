import React from 'react';
import ReactDOM from 'react-dom';

import './global.scss';
import Router from './app/Router';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById('root')
);
