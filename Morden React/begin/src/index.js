import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // root라는 아이디에 있는 값에다가 <= App에 넣는다는 말, root가 있는 파일은 Html로 작성 되어 있다 = App에 있는 파일을 root에 넣어서 Html형태로 만들어버린다.
  // + root는 public/index.html에 있다.
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
