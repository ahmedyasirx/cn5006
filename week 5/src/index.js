import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import GreetingElement from './mygreetingapp';
import GreetingElementwithProp from './mygreetingprop'; 
import AppColor from './appbackgroundj' 
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App/> */}
    
    <AppColor heading="This is third third element" lbl="Name :"  color="yellow"/> 
    <AppColor heading="This is first element" lbl="Name :"  color="green"/> 
   <AppColor heading="This is second element" lbl="Name :"  color="blue"/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
