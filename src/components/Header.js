import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo_size.png';

const Header = () => {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt=""
            src={Logo}
            width="144"
            height="96"
            className="d-inline-block align-top"
          />{' '}
        </Navbar.Brand>

        <Nav className="me-auto">
          <Nav.Link href="/create">Create DAO</Nav.Link>
          <Nav.Link href="/dashboard">Dashboard</Nav.Link>
          {/* <Nav.Link href="/">Submit Proposal</Nav.Link> */}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
