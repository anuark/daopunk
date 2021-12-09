import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dashboard, CreateDAO, CreateProposal, CastVote, DaoDash } from './views';
import Header from './components/Header';

function App() {
  const [userAddress, setUserAddress] = useState(null);
  // const [daoAddress, setDaoAddress] = useState(null);
  const [currentDao, setCurrentDao] = useState(null);

  return (
    <Container>
      <Header setUserAddress={setUserAddress} />
      <Routes>
        <Route path="/" element={<Dashboard userAddress={userAddress} setCurrentDao={setCurrentDao} />} />
        <Route path="/dao/:contractAddress" element={<DaoDash currentDao={currentDao} userAddress={userAddress} />} />
        <Route path="/create" element={<CreateDAO userAddress={userAddress} setCurrentDao={setCurrentDao} currentDao={currentDao} />} />
        <Route path="/propose" element={<CreateProposal currentDao={currentDao} userAddress={userAddress}/>} />
        <Route path="/vote" userAddress={userAddress} element={<CastVote />} />
      </Routes>
    </Container>
  );
}

export default App;
