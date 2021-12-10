import { Button, Form, Row, Container, Col } from 'react-bootstrap';
import { Outlet, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CreateDao = (props) => {
  const form = React.createRef();
  const navigate = useNavigate();
  const { userAddress, currentDao, setCurrentDao, setShowLoading, setLoadingText } = props;

  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    document.getElementById('owner').value = userAddress;

    form.current.addEventListener('submit', async(ev) => {
      if (!isLoading) {
        setLoading(true);
        console.log('creating dao');
        ev.preventDefault();
        const tknCap = document.getElementById('tokenCap').value;

        const name = document.getElementById('name').value;
        const owner = document.getElementById('owner').value;
        const tokenName = document.getElementById('tokenName').value;
        const tokenCap = tknCap > 100 ? tknCap : 10000000;
        const hasQuadraticVoting = document.getElementById('quadraticVoting').value;
        const tokenSymbol = document.getElementById('tokenSymbol').value;

        setShowLoading(true);
        setLoadingText('Generating DAO...');
        const res = await axios.post('/api/create-dao', {
          name,
          owner,
          tokenName,
          tokenCap,
          hasQuadraticVoting,
          tokenSymbol,
          userAddress
        });

        if (res.status === 200) {
          setShowLoading(false);
          alert('DAO created');
          setLoading(false);
          await setCurrentDao(res.data);
          console.log(res.data, 'after setDao');
          // navigate(`/dao/${res.data.contractAddress}`);
          navigate('/');
        }

        setShowLoading(false);
      }
    });
  }, [isLoading]);

  return (
    <div>
      <h1>Create DAO</h1>
      <Form method="post" ref={form}>
        <Container fluid>
          <br/>
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
          <Button variant="primary" type="submit" disabled={isLoading}>
          Submit
          </Button>
        </Container>
      </Form>
      <br /><br />
      <Outlet />
    </div>
  );
};

export default CreateDao;
