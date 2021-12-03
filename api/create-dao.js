require('dotenv').config({debug: true});
const { ethers } = require('hardhat');
const { ContractFactory } = ethers;
const fs = require('fs');
const { compile } = require('./_util');

// 1. figure how to run hardhat task when compile is completed
// 2. solcjs to compile. get abi and bytecode
export default async function handler(req, res) {
  // const { hasQuadraticVoting, name: daoName, owner, tokenCap, tokenName } = req.body;
  const fileBuf = fs.readFileSync('contracts/Greeter.sol');
  const [abi, byteCode] = compile(fileBuf.toString('utf8'), 'Greeter');
  // const Factory = new ContractFactory(abi, byteCode);
  const Greeter = await ethers.getContractFactory('Greeter');
  const contract = await Greeter.deploy('hello');
  console.log(contract, contract.address);
  // console.log(contract);
  // // change the dao name
  // fs.writeFileSync('contracts/test.sol', 'hola');
  // // compile solcjs
  // // deploy the smart contract on the blockchain

  // console.log('deploying contract...');
  // console.log(process.env.PRIVATE_KEY, 'private key');
  // const Greeter = await ethers.getContractFactory("Greeter");
  // const greeter = await Greeter.deploy("Hello, world!");
  // await greeter.deployed();
  // console.log('contract deployed');

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json({ name: 'created' });
};
