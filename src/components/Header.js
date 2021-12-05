import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo_size.png';
import { BsPlusCircle, BsFillLightningChargeFill } from 'react-icons/bs';

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
            style={{marginLeft: '42px'}}
          />{' '}
        </Navbar.Brand>

        <Nav className="justify-content-end">
          <NavDropdown title="Rinkeby" id="nav-dropdown" className="me-3">
            <NavDropdown.Item  eventKey="4.1">Ethereum mainnet</NavDropdown.Item>
            <NavDropdown.Item>Ropsten</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Localhost</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/dashboard" className="me-3"><BsFillLightningChargeFill />Connect Wallet</Nav.Link>
          <Nav>
            <Button variant="primary" className="me-3"><BsPlusCircle /> &nbsp;Create DAO</Button>
          </Nav>
          {/* <Nav.Link href="/">Submit Proposal</Nav.Link> */}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
