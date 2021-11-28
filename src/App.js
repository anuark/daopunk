import React from 'react';
import { Row, Container, Navbar } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './assets/logo_size.png';
import CreateDAO from './views/CreateDAO';
import Dashboard from './views/Dashboard';

function App() {
  return (
    <Container>
      {/*<Navbar>
        <Navbar.Brand href="#home">
          <img
            alt="logo"
            src={Logo}
            width="144"
            height="96"
            className="d-inline-block align-top"
          />{' '}
        </Navbar.Brand>
        <Navbar.Link href="/create">Create DAO</Navbar.Link>
        <Navbar.Link href="/Dashboard">Dashboard</Navbar.Link>
      </Navbar>*/}
      <Row>
        <Routes>
          <Route exact path="/create" component={CreateDAO} />
          <Route exact path="/Dashboard" component={Dashboard} />
          <Route exact path="/" render={() => ("hola123")} />
        </Routes>
      </Row>
    </Container>
  );
}

export default App;
