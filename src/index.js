import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SuperiorApp from './SuperiorApp';
//import Homepage from './HomePage';
//import App from './App'
//import Contact from './Contact';
import 'bootstrap/dist/css/bootstrap.min.css'
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SuperiorApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
