import { Button, Form, Row, Container, Col } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import React, { useEffect } from 'react';
import axios from 'axios';

const CastVote = () => {
  const form = React.createRef();

  useEffect(() => {
    form.current.addEventListener('submit', async(ev) => {
      ev.preventDefault();
      const id = document.getElementById('id').value;
      const support = document.getElementById('support').value;
      const reject = document.getElementById('reject').value;

      if (support && !reject) voteBool = true;
      if (!support && reject) voteBool = false;

      const res = await axios.post('/api/vote-prop', { id, voteBool });

      if (res.status === 200) {
        alert('Vote cast');
      }
    });
  }, []);

  return (
    <div>
      <h1>Cast Proposal Vote</h1>
      <Form method="post" ref={form}>
        <Container fluid>
          <Row>
            <Col>
              <Form.Group controlId="id">
                <Form.Label>Prop ID</Form.Label>
                <Form.Control type="text" placeholder="1" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="support">
                <Form.Check type="checkbox" label="Support" />
              </Form.Group>
              <Form.Group controlId="reject">
                <Form.Check type="checkbox" label="Reject" />
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

export default CastVote;
