import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // when we don't add extension it is bydefault js e.g App.js, index.js
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); // Browse always read this file "index.js" 
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// 1:30:8 video watched