import { Navbar, Nav, Form, FormControl, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { instance } from '../../config';
import { BsPlusCircle, BsBookmarkCheck } from 'react-icons/bs';
import './DaoDash.css';

const DaoDash = props => {
  const { userAddress, currentDao, setCurrentDao } = props;
  const [daoId] = useState([]);

  useEffect(() => {
    console.log(currentDao, 'currentDao');
  }, [currentDao]);

  return (
    <div>
      <Row>
        <h3>{currentDao.name} Dashboard </h3>
        <Nav className="justify-content-center">
          <Link to="/propose" >
            <Nav.Item ><Button className="text-light bg-primary" variant="primary"><BsPlusCircle /> Create Proposal</Button></Nav.Item>
          </Link>
        </Nav>
      </Row>
      <br />
      <Row className="text-light bg-secondary rounded p-4">
        <Nav className="justify-content-center"><h4>Current Prop</h4></Nav>
        <Col >
          <p>Description:</p>
          <p>Value:</p>
          <p>Target Address:</p>
          <p>Method Call:</p>
        </Col>
        <Col className="col-3">
          <Nav className="justify-content-center">
            <Link to="/vote">
              <Button className="text-dark bg-light justify-content-center" variant="primary"><BsBookmarkCheck /> Vote on Prop: #</Button>
            </Link>
          </Nav>
        </Col>
      </Row>
      <br />
      <Row>
        <h4>Proposal History: (last 5 props)</h4>
        <Container> { currentDao.proposalHistory.map((val, i) => {
          return (
            <Row key={i}>
              <h4>{val.description}</h4>
              <h5>Passed: {val.passed ? 'Passed' : 'Not passed'}</h5>
            </Row>
          );
        }) } </Container>
      </Row>
    </div>
  );
};

export default DaoDash;
