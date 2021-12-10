import React, { useState, Fragment } from 'react';
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dashboard, CreateDAO, CreateProposal, CastVote, DaoDash } from './views';
import Header from './components/Header';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [userAddress, setUserAddress] = useState(null);
  // const [daoAddress, setDaoAddress] = useState(null);
  const [currentDao, setCurrentDao] = useState(null);
  const [showLoading, setShowLoading] = useState(false);
  const [loadingText, setLoadingText] = useState('Loading...');

  return (
    <Fragment>
      <Container>
        <Header setUserAddress={setUserAddress} />
        <Routes>
          <Route path="/" element={<Dashboard userAddress={userAddress} setCurrentDao={setCurrentDao} />} />
          <Route path="/dao/:contractAddress" element={<DaoDash currentDao={currentDao} userAddress={userAddress} setCurrentDao={setCurrentDao} />} />
          <Route path="/create" element={<CreateDAO userAddress={userAddress} setCurrentDao={setCurrentDao} currentDao={currentDao} setShowLoading={setShowLoading} setLoadingText={setLoadingText} />} />
          <Route path="/propose" element={<CreateProposal currentDao={currentDao} userAddress={userAddress} setShowLoading={setShowLoading} setLoadingText={setLoadingText}/>} />
          <Route path="/vote" element={<CastVote userAddress={userAddress} currentDao={currentDao} setShowLoading={setShowLoading} setLoadingText={setLoadingText} />} />
        </Routes>
        <Footer />
      </Container>
      <LoadingScreen showLoading={showLoading} loadingText={loadingText} />
    </Fragment>
  );
}

export default App;
