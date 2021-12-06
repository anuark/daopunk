import { Button, Form, Row, Container, Col } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import React, { useEffect } from 'react';
import axios from 'axios';

const CreateProposal = () => {
  const form = React.createRef();

  useEffect(() => {
    form.current.addEventListener('submit', async(ev) => {
      ev.preventDefault();
      const targets = document.getElementById('targets').value;
      const values = document.getElementById('values').value;
      const callcontracts = document.getElementById('callcontracts').value;
      const calldatas = document.getElementById('calldatas').value;
      const description = document.getElementById('description').value;

      const res = await axios.post('/api/create-prop', {
        targets,
        values,
        callcontracts,
        calldatas,
        description
      });

      if (res.status === 200) {
        alert('Prop created');
      }
    });
  }, []);

  return (
    <div>
      <h1>Create Proposal</h1>
      <Form method="post" ref={form}>
        <Container fluid>
          <Row>
            <Col>
              <Form.Group controlId="targets">
                <Form.Label>Target</Form.Label>
                <Form.Control type="text" placeholder="0x1234" />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group controlId="callcontracts">
                <Form.Label>Call Contract Name</Form.Label>
                <Form.Control type="text" placeholder='Example' />
              </Form.Group>
            </Col>
          </Row>

          <br />
          <Row>
            <Col>
              <Form.Group controlId="values">
                <Form.Label>Value</Form.Label>
                <Form.Control type="text" placeholder="0" />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group controlId="calldatas">
                <Form.Label>Call Data</Form.Label>
                <Form.Control type="text" placeholder='"changeMsg", ["Anarchy!"]' />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Prop desc..." />
              </Form.Group>
            </Col>
          </Row>
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

export default CreateProposal;
