import React from 'react';
import ReactDOM from 'react-dom';
// Need to fix css loading order
// Bootstrap is overriding custom css
import './assets/bootstrap/css/bootstrap.min.css';

import App from './app/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
