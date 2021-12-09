import { Row, Container, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { instance } from '../../config';
import './Dashboard.css';

const Dashboard = props => {
  const { setCurrentDao } = props;
  const [daoList, setDaoList] = useState([]);

  useEffect(() => {
    instance.get('/').then(({ data }) => {
      setDaoList(data);
    });
  }, []);

  /* FROM API/MODEL/DAO

    const Dao = new Schema({
        name: String,
        ownerAddress: String,
        contractAddress: String,
        tokenAddress: String,
        timelockAddress: String,
        tokenName: String,
        tokenSymbol: String
    });

*/
  // const onClick = () => {
  //   console.log('clicked');
  // };

  // 4 Col per Row
  // DAO address
  // token address
  // dao name
  const rows = [...Array(Math.ceil(daoList.length / 4))];
  const productRows = rows.map((row, i) => daoList.slice(i * 4, i * 4 + 4));
  const content = productRows.map((row, i) => (
    <Row key={i}>
      { row.map((dao, i) => (
        <Col className='dao-item' key={i}>
          <Link to={`/dao/${dao.contractAddress}`} onClick={() => setCurrentDao(dao)}>
            <h4 className="text-primary">{dao.name}</h4>
            <p><span className="text-muted">Transactions</span> <br />{dao.transactions}</p>

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
