import React, { useState } from 'react';
import { Row, Container, Navbar } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dashboard, CreateDAO, CreateProposal, CastVote, DaoDash } from './views';
import Header from './components/Header';
import mongoose from 'mongoose';

function App() {
  const [userAddress, setUserAddress] = useState(null);
  const [daoAddress, setDaoAddress] = useState(null);

  return (
    <Container>
      <Header setUserAddress={setUserAddress} />
      <Routes>
        <Route path="/" element={<Dashboard userAddress={userAddress} />} />
        <Route path="/daoId" element={<DaoDash userAddress={userAddress} />} />
        <Route path="/create" element={<CreateDAO userAddress={userAddress} />} />
        <Route path="/propose" element={<CreateProposal />} />
        <Route path="/vote" userAddress={userAddress} element={<CastVote />} />
      </Routes>
    </Container>
  );
}

export default App;
