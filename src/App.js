import React from 'react';
import { useEffect, useState } from 'react';
import { Button, Form, Row, Container, Navbar } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);

  return (
    <Row>
      <h1>Title 3</h1>
      <Form>
        <Form.Group className="mb-3" controlId="dao-name">
          <Form.Label>DAO Name</Form.Label>
          <Form.Control type="text" placeholder="Constitution DAO..." />
          {/*<Form.Text className="text-muted">
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
    </Row>
  );
}

export default App;

