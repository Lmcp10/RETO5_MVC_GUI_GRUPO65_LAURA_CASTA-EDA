import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterApp } from './routers/RouterApp';
import { Footer } from './Components/Footer';
import { RouterSocio } from './routers/RouterSocio';
import { RouterAdmin } from './routers/RouterAdmin';


function App() {
  return (
    <Router>
      
      <RouterApp/>
      <RouterAdmin/>
      <RouterSocio/>
      <Footer/>
    </Router>
  );
}

export default App;
