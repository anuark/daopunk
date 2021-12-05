import { Button, Form, Row, Container, Col } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import React, { useEffect } from 'react';
import axios from 'axios';

const CreateDao = () => {
  const form = React.createRef();

  useEffect(() => {
    //
    form.current.addEventListener('submit', async(ev) => {
      ev.preventDefault();
      const name = document.getElementById('name').value;
      const owner = document.getElementById('owner').value;
      const tokenName = document.getElementById('tokenName').value;
      const tokenCap = document.getElementById('tokenCap').value;
      const hasQuadraticVoting = document.getElementById('quadraticVoting').value;
      const tokenSymbol = document.getElementById('tokenSymbol').value;

      const res = await axios.post('/api/create-dao', {
        name,
        owner,
        tokenName,
        tokenCap,
        hasQuadraticVoting,
        tokenSymbol
      });

      if (res.status === 200) {
        alert('DAO created');
      }
    });
  }, []);

  return (
    <div>
      <h1>Create DAO</h1>
      <Form method="post" ref={form}>
        <Container fluid>
          <Row>
            <Col>
              <Form.Group controlId="name">
                <Form.Label>DAO Name</Form.Label>
                <Form.Control type="text" placeholder="Constitution DAO..." />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group controlId="owner">
                <Form.Label>Owner Address</Form.Label>
                <Form.Control type="text" placeholder="0x1234" />
              </Form.Group>
            </Col>
          </Row>

          <br />
          <Row>
            <Col>
              <Form.Group controlId="tokenName">
                <Form.Label>Token Name</Form.Label>
                <Form.Control type="text" placeholder="People..." />
                <Form.Text className="text-muted"> </Form.Text>
              </Form.Group>
            </Col>

            <Col>
              <Form.Group controlId="tokenCap">
                <Form.Label>Token Capacity</Form.Label>
                <Form.Control type="text" placeholder="100000" />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group controlId="tokenSymbol">
                <Form.Label>Token Symbol</Form.Label>
                <Form.Control type="text" placeholder="CONST" />
              </Form.Group>
            </Col>
          </Row>

          <br />
          <Form.Group controlId="quadraticVoting">
            <Form.Check type="checkbox" label="Quadratic Voting" />
          </Form.Group>

          <br />
          <Button variant="primary" type="submit">
          Submit
          </Button>
        </Container>
      </Form>

      <Outlet />
    </div>
  );
};

export default CreateDao;
