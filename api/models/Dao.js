const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const Dao = new Schema({
  name: String,
  ownerAddress: String,
  contractAddress: String,
  tokenAddress: String,
  timelockAddress: String,
  tokenName: String,
  tokenSymbol: String,
  proposalHistory: Array,
  tokenAbi: String,
  contractAbi: String
});

mongoose.model('Dao', Dao);
