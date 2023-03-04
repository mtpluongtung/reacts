import React, { Fragment, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './pages/Login/Login';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Admin from './pages/Admin/Admin';
import PrivateRouter from './Components/PrivateRouter';
function App() {
 
  return (
    <div className='App' id='wrapper'>
      <Fragment>
      <Router>
            <Routes>
             <PrivateRouter>
             </PrivateRouter>
            </Routes>
      </Router>
      </Fragment>
    </div>
  );
}

export default App;
