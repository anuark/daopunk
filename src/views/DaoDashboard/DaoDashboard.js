import { Button, Form, Row, Container, Col } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import React, { useEffect, Fragment } from 'react';
// import axios from 'axios';

const CreateDao = () => {
  const { contractAddress } = useParams();
  console.log('daoDashboard');

  useEffect(() => {
    //
  }, []);

  return (
    <Fragment>
      <Row>
        <h3>Current Proposal</h3>
      </Row>
      <Row>
        <Col lg="3">
          <h3>Voting Wallet</h3>
          <h5 className="text-secondary">Tokens: 0.000</h5>
          <br />
          <br />
            <Link to="/propose"><Button variant="primary">Propose</Button></Link>
        </Col>
        <Col>
          <h3>Active Proposals</h3>
        </Col>
      </Row>
    </Fragment>
  );
};

export default CreateDao;
