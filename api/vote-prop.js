const { ethers } = require('hardhat');

export default async function handler(req, res) {
  const { id, voteBool } = req.body;

  // get msg.sender from metamask
  const [addr1] = await ethers.provider.listAccounts();

  // need Token and GovAlpha contract addresses & names in state of current DAO
  const governorAlphaName = "GovernorAlpha";
  const govAlphaAddr = "0x1505c74f24DaDB71fa27b00081aEE495FbF6e08E";
  const tokenName = "Token";
  const tokenAddr = "0xb2A0381Eeeca8849128C583bf8a508D549628CDC";

  const token = await ethers.getContractAt(tokenName, tokenAddr);
  await token.delegate(addr1);

  const govAlpha = await ethers.getContractAt(governorAlphaName, govAlphaAddr);
  await govAlpha.castVote(id, voteBool);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json({ name: 'voted on prop' });
};
