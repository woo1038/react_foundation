import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Chapter06 from './Chapter06';
import Greeting from './Chapter07/Greeting';
import LoginControl from './Chapter07/LoginControl';


/* function tick() {
  const ele = (
    <div>
      <h1></h1>
      <h2>Now {new Date().toLocaleTimeString()}.</h2>
    </div>
  );

  ReactDOM.render(
    ele,
    document.getElementById('root'));
}

setInterval(tick, 1000); */


// function def(person) {
//   return person.name + " " + person.age;
// }

// const person = {
//   name: "hleo",
//   age: 16
// }
// const element = <h1>Hello, {def(person)}!</h1>

ReactDOM.render(
  <React.StrictMode>
    <LoginControl />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();