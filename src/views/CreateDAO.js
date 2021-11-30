import { Button, Form, Row, Container, Col } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import React from 'react';

const CreateDao = () => {
  console.log('CreateDao');
  return (
    <div>
      <h1>Create DAO</h1>
      <Form>
        <Container fluid>
          <Row>
            <Col>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted"> We&apos;ll never share your email with anyone else.  </Form.Text>
              </Form.Group>
            </Col>

            <Col>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Col>
          </Row>

          <br />
          <Form.Group controlId="formBasicCheckbox">
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
