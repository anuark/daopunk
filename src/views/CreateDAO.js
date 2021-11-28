import { Button, Form } from 'react-bootstrap';
import React from 'react';

export default function createDao() {
  return (
    <React.Fragment>
      <h1>Create DAO</h1>
      <Form>
        <Form.Group className="mb-3" controlId="dao-name">
          <Form.Label>DAO Name</Form.Label>
          <Form.Control type="text" placeholder="Constitution DAO..." />
          {/* <Form.Text className="text-muted">
              </Form.Text> */}
        </Form.Group>

        <Form.Group className="mb-3" controlId="dao-token">
          <Form.Label>Token Name</Form.Label>
          <Form.Control type="text" placeholder="Token" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Quadratic Voting" />
        </Form.Group>

        <Button variant="primary" type="submit">
              Submit
        </Button>
      </Form>
    </React.Fragment>
  );
};
