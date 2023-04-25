import React from 'react';
import ReactDOM from 'react-dom/client';
//import Clock from './Clock';

import Clock from './ClockFunction';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Clock />
  </React.StrictMode>
);
