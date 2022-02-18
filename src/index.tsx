import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <React.StrictMode>
    <div>{process.env.NODE_ENV} s</div>
  </React.StrictMode>,

  document.getElementById('root')
);
