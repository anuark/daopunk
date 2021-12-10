import { Button, Form, Row, Container, Col } from 'react-bootstrap';
import { Outlet, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CastVote = props => {
  const { currentDao, userAddress } = props;
  const navigate = useNavigate();
  const form = React.createRef();

  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    form.current.addEventListener('submit', async(ev) => {
      if (!isLoading) {
        setLoading(true);
        console.log('casting vote');
        ev.preventDefault();
        const id = document.getElementById('id').value;
        const support = document.getElementById('support').value;
        const reject = document.getElementById('reject').value;

        const voteBool = support ? support : reject;

        const res = await axios.post('/api/vote-prop', { 
          id,
          voteBool,
          userAddress,
          contractAddress: currentDao.contractAddress,
          contractAbi: currentDao.contractAbi,
          tokenAddress: currentDao.tokenAddress,
          tokenAbi: currentDao.tokenAbi
         });

        if (res.status === 200) {
          alert('Vote cast');
          setLoading(false);
          navigate(`/dao/${currentDao.contractAddress}`);
        }
      }
    });
  }, [isLoading]);

  return (
    <div>
      <h1>Cast Proposal Vote</h1>
      <Form method="post" ref={form}>
        <Container fluid>
          <Row>
            <Col>
              <Form.Group controlId="id">
                <Form.Label>Proposal ID</Form.Label>
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

          <Button variant="primary" type="submit" disabled={isLoading}>
          Submit
          </Button>
        </Container>
      </Form>

      <Outlet />
    </div>
  );
};

export default CastVote;
