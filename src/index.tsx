import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import Image from './assets/laptop.jpg';

const App = () => (
  <React.Fragment>
    <img src={Image} alt="" />
  </React.Fragment>
);

ReactDOM.render(<App />, document.getElementById('root'));
