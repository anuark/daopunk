import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateDAO from './views/CreateDAO';
import Dashboard from './views/Dashboard';
import Home from './views/Home';
import Header from './components/Header';

// ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
render(
  <BrowserRouter>
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/create" element={<CreateDAO />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Container>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
