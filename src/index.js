// import React from 'react';
// import ReactDOM from 'react-dom';
// import TodoList from "./TodoList";
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
    // <App />
//   </React.StrictMode>,
  // var destination = document.querySelector("#container")

  // ReactDOM.render(
  //  <div>Hello!</div>,
  //  destination
  // document.getElementById('root')
// );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// var destination = document.querySelector("#container")

// ReactDOM.render(
//   <div>
//  <TodoList/>
//  </div>,
//  <div>Hello!</div>,
//  destination
 
// );

// document.getElementById('root')
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoList from "./TodoList";


var destination = document.getElementById("container")

ReactDOM.render(
 <div>
 <TodoList/>
 
 </div>,
 destination
);
// document.getElementById('root')
