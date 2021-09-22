import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import '@fontsource/acme';
import '@fontsource/koho';
import "@fontsource/yellowtail"
import "@fontsource/blinker"
import "animate.css"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


