const { ethers } = require('hardhat');
const { compile } = require('./_util');

export default async function handler(req, res) {
  const { targets, values, callcontracts, calldatas, description, tokenAddress, tokenName, userAddress, contractAddress, contractName } = req.body;

  // Compile and deploy Example.js ?
  // const fileBufToken = fs.readFileSync('contracts/Token.sol');
  // const [abiTk, bytecodeTk] = compile(fileBufToken.toString('utf8'), 'Example.sol');

  // need Token and GovAlpha contract addresses & names in state of current DAO
  const governorAlphaName = contractName;
  const govAlphaAddr = contractAddress;

  // call contract and call data from user input
  const callContractName = `"${callcontracts}"`;
  const callContractAddr = `"${targets}"`;

  const Dao = mongoose.models('Dao');
  const dao = Dao.find().where({ tokenAddress });

  // delegate msg.sender w/ Token contract
  const token = await ethers.getContractAt(, tokenAddress);
  await token.delegate(userAddress);
  const callContract = await ethers.getContractAt(callContractName, callContractAddr);

  // format call data
  const calldata = callContract.interface.encodeFunctionData(calldatas);

  // propose proposal w/ GovernorAlpha contract
  const govAlpha = await ethers.getContractAt(governorAlphaName, govAlphaAddr);
  // govAlpha.on('');
  const tx = await govAlpha.propose([targets], [values], [calldata], description);
  const receipt = await tx.wait();

  // store receipt on mongodb
  console.log(receipt, 'receipt');

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json({ name: 'prop created', receiptId: receipt.id });
};
