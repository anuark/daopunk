require('dotenv').config({debug: true});
const { ethers } = require('hardhat');
const { ContractFactory } = ethers;
const fs = require('fs');
const { compile } = require('./_util');

// 1. figure how to run hardhat task when compile is completed
// 2. solcjs to compile. get abi and bytecode
export default async function handler(req, res) {
  // deployer address
  const [addr1] = await ethers.provider.listAccounts();

  // const { hasQuadraticVoting, name: daoName, owner, tokenCap, tokenName } = req.body;
  // const fileBufToken = fs.readFileSync('contracts/Token.sol');

  // const fileBufMath = fs.readFileSync('contracts/SafeMath.sol');

  // const fileBufTimelock = fs.readFileSync('contracts/Timelock.sol');

  const fileBufGovernor = fs.readFileSync('contracts/GovernorAlpha.sol');
  const [abi, byteCode] = compile(fileBufGovernor.toString('utf8'), 'GovernorAlpha.sol');
  // const [abi, byteCode] = compile([fileBufToken.toString('utf8'), fileBufMath.toString('utf8'), fileBufTimelock.toString('utf8'), fileBufGovernor.toString('utf8')], '[]');

  // const Factory = new ContractFactory(abi, byteCode);
  const Token = await ethers.getContractFactory('Token');
  const token = await Token.deploy(addr1);
  console.log(`ADDR1: ${addr1} \n token deployed`);
  console.log(`TOKEN CONTRACT: \n ${token}, ${token.address}`);

  // add nonce, nonce + addr1 = GovernorAddr
  const nonce = await ethers.provider.getTransactionCount(addr1);
  const governorAddr = ethers.utils.getContractAddress({ from: addr1, nonce: nonce + 1 });

  // deploy timelock contract w/ GovernorAddr (supports proposal process functionality)
  const Timelock = await ethers.getContractFactory("Timelock");
  const timelock = await Timelock.deploy(governorAddr, 0);
  await timelock.deployed();
  console.log("timelock deployed");


  const GovernorAlpha = await ethers.getContractFactory('GovernorAlpha');
  const govContract = await GovernorAlpha.deploy(timelock.address, token.address, addr1);
  console.log(`GOVERNORADDR: ${governorAddr} \n governor deployed`);
  console.log(`GOVERNOR CONTRACT: \n {govContract}, ${govContract.address}`);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json({ name: 'created' });
};
