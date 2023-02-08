import React from 'react';
import ReactDOM from 'react-dom';
import MasterTemplate from './MasterTemplate';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Pages/Login.jsx';
import "./CSS/Login.css"

ReactDOM.render(
  <React.StrictMode>
    {/* <Login/> */}
    <MasterTemplate />
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
