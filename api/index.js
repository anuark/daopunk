import './_config.js';
import mongoose from 'mongoose';

export default async function handler(req, res) {
  const Dao = mongoose.model('Dao');
  const daoList = await Dao.find();
  // console.log(daoList);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.send(daoList);
  // res.send([
  //   {
  //     name: 'Constitution DAO',
  //     transactions: 0
  //   },
  //   {
  //     name: 'Humana',
  //     transactions: 111
  //   },
  //   {
  //     name: 'Humana2',
  //     transactions: 121
  //   },
  //   {
  //     name: 'Humana3',
  //     transactions: 3
  //   },
  //   {
  //     name: 'Constitution DAO',
  //     transactions: 0
  //   },
  //   {
  //     name: 'Humana',
  //     transactions: 111
  //   },
  //   {
  //     name: 'Humana2',
  //     transactions: 121
  //   },
  //   {
  //     name: 'Humana3',
  //     transactions: 3
  //   }
  // ]);
}
