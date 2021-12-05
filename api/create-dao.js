// require('dotenv').config({debug: true});
const { ethers } = require('hardhat');
const { ContractFactory } = ethers;
const fs = require('fs');
const { compile } = require('./_util');

// 1. figure how to run hardhat task when compile is completed
// 2. solcjs to compile. get abi and bytecode
export default async function handler(req, res) {
  // deployer address
  const [addr1] = await ethers.provider.listAccounts();
  console.log(`--- \n\nADDR1: ${addr1}`);

  // const { hasQuadraticVoting, name: daoName, owner, tokenCap, tokenName } = req.body;
  const fileBufToken = fs.readFileSync('contracts/Token.sol');
  const [abiTk, bytecodeTk] = compile(fileBufToken.toString('utf8'), 'Token.sol');

  // const fileBufTimelock = fs.readFileSync('contracts/Timelock.sol');
  // const [abiTm, byteCodeTm] = compile(fileBufTimelock.toString('utf8'), 'Timelock.sol');

  // const fileBufGovernor = fs.readFileSync('contracts/GovernorAlpha.sol');
  // const [abiGv, byteCodeGv] = compile(fileBufGovernor.toString('utf8'), 'GovernorAlpha.sol');

  // const Factory = new ContractFactory(abi, byteCode);
  const Token = await ethers.getContractFactory(abiTk, bytecodeTk);
  const token = await Token.deploy(addr1);
  console.log(`TOKEN CONTRACT: ${token.address}`);

  // add nonce, nonce + addr1 = GovernorAddr
  // const nonce = await ethers.provider.getTransactionCount(addr1);
  // const governorAddr = ethers.utils.getContractAddress({ from: addr1, nonce: nonce + 1 });
  // console.log(`GOV-ADDR: ${governorAddr}`);

  // deploy timelock contract w/ GovernorAddr (supports proposal process functionality)
  // const Timelock = await ethers.getContractFactory(abiTm, byteCodeTm);
  // const timelock = await Timelock.deploy(governorAddr, 0);
  // await timelock.deployed();
  // console.log(`TIMELOCK CONTRACT: ${timelock.address}`);

  // const GovernorAlpha = await ethers.getContractFactory(abiGv, byteCodeGv);
  // const govContract = await GovernorAlpha.deploy(timelock.address, token.address, addr1);
  // console.log(`GOVERNOR CONTRACT: ${govContract.address}`);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json({ name: 'created' });
};
