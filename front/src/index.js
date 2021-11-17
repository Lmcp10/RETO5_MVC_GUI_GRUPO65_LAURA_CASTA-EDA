import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/App';
import Axios from 'axios';



import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './assets/css/style.css'
import './assets/css/main.css'
import './assets/css/reset.css'
import './assets/css/grid.css'
import './assets/css/reserva.css'


Axios.defaults.baseURL='http://localhost:4000'


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

