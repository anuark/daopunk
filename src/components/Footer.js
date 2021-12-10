import React, { useEffect, useState, useRef } from 'react';
import { Navbar, Nav, Form, Row, FormControl, Button, Container } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo_size.png';
import { BsPlusCircle, BsFillLightningChargeFill } from 'react-icons/bs';
import MetaMaskOnboarding from '@metamask/onboarding';
import './footer.css';

const Footer = props => {
  return (
    <footer>
      <Container>
        <Row className="text-muted">
            <h5>Dao Punk - 2021</h5>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
