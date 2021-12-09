const { ethers } = require('hardhat');

export default async function handler(req, res) {
  const { id, voteBool, userAddress, tokenAddress, tokenAbi, contractAddress, contractAbi } = req.body;

  const accounts = await ethers.getSigners();
  const token = new ethers.Contract(tokenAddress, tokenAbi, accounts[0]);
  await token.delegate(userAddress);

  const govAlpha = new ethers.Contract(contractAddress, contractAbi, accounts[0]);
  await govAlpha.castVote(id, voteBool);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json({ name: 'voted on prop' });
};
