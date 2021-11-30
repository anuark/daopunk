const { ethers } = require('hardhat');
const fs = require('fs');
require('dotenv').config({debug: true});

export default async function handler(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  fs.writeFileSync('contracts/test.sol', 'hola');

  console.log('deploying contract...');
  console.log(process.env.PRIVATE_KEY, 'private key');
  const Greeter = await ethers.getContractFactory("Greeter");
  const greeter = await Greeter.deploy("Hello, world!");
  await greeter.deployed();
  console.log('contract deployed');
  res.json({ name: 'created' });
};
