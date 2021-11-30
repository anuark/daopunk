import React from 'react';
import { Row, Container, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import OnboardingButton from './metamask'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './assets/logo_size.png';

function App() {
  console.log('App.js is running');
  return (
   // <h1> Hello World </h1>
    <Router>
        <OnboardingButton/>
    </Router>
  );
}

export default App;
