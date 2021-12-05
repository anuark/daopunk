import React from 'react';
import { Row, Container, Navbar } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dashboard, CreateDAO } from './views';
import Header from './components/Header';

function App() {
  console.log('App.js is running');
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/create" element={<CreateDAO />} />
      </Routes>
    </Container>
  );
}

export default App;
