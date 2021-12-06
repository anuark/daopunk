const { ethers } = require('hardhat');

export default async function handler(req, res) {
  const { targets, values, callcontracts, calldatas, description } = req.body;

  // get msg.sender from metamask
  const [addr1] = await ethers.provider.listAccounts();

  // need Token and GovAlpha contract addresses & names in state of current DAO
  const governorAlphaName = "GovernorAlpha";
  const govAlphaAddr = "0x1505c74f24DaDB71fa27b00081aEE495FbF6e08E";
  const tokenName = "Token";
  const tokenAddr = "0xb2A0381Eeeca8849128C583bf8a508D549628CDC";

  // call contract and call data from user input
  const callContractName = `"${callcontracts}"`;
  const callContractAddr = `"${targets}"`;

  // delegate msg.sender w/ Token contract
  const token = await ethers.getContractAt(tokenName, tokenAddr);
  await token.delegate(addr1);
  const callContract = await ethers.getContractAt(callContractName, callContractAddr);

  // format call data
  const calldata = callContract.interface.encodeFunctionData(calldatas);

  // propose proposal w/ GovernorAlpha contract
  const govAlpha = await ethers.getContractAt(governorAlphaName, govAlphaAddr);
  const tx = await govAlpha.propose([targets], [values], [calldata], description);
  const receipt = await tx.wait();

  console.log(receipt);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json({ name: 'prop created' });
};
