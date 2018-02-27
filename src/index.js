import React from 'react';
import ReactDOM from 'react-dom';
// import BrowserRouter from react-router-dom
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// wrap the App component in BrowserRouter
ReactDOM.render(<BrowserRouter>
    <App/>
  </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
