import { Row, Container, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { instance } from '../../config';
import './Dashboard.css';

const Dashboard = props => {
  const { userAddress } = props;
  const [daoList, setDaoList] = useState([]);

  console.log(userAddress, 'userAddress');

  useEffect(() => {
    instance.get('/').then(({ data }) => {
      setDaoList(data);
    });
  }, []);

  // 4 Col per Row
  // DAO address
  // token address
  // dao name
  const rows = [...Array(Math.ceil(daoList.length / 4))];
  const productRows = rows.map((row, i) => daoList.slice(i * 4, i * 4 + 4));
  const content = productRows.map((row, i) => (
    <Row key={i}>
      { row.map((val, i) => (
        <Col className='dao-item' key={i}>
          <Link to="#">
          <h4 className="text-primary">{val.name}</h4>
          <p><span className="text-muted">Transactions</span> <br />{val.transactions}</p>
          </Link>
        </Col>
      ))
      }
    </Row>
  ));

  return (
    <Container> { content } </Container>
  );
};

export default Dashboard;
