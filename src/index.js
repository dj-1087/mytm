import ReactDOM from 'react-dom';
import App from './components/App';
import axios from 'axios';
import React from 'react';
import "./styles.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

axios.get('http://localhost:3003/mytm').then((Response)=>{
    console.log(Response.data);
}).catch((Error)=>{
    console.log(Error);
})