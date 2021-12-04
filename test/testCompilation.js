const solc = require('solc');
const { ethers } = require('hardhat');
const { ContractFactory } = ethers;
const fs = require('fs');

/**
 * @var content Buffer
 * @return [byteCode, ABI]
 */

/*
const compile = (content, contractName) => {
  const input = {
    language: 'Solidity',
    sources: {
      'test.sol': {
        content
      }
    },
    settings: {
      outputSelection: {
        '*': {
          '*': ['*']
        }
      }
    }
  };

  const output = JSON.parse(solc.compile(JSON.stringify(input)));
  return [
    output.contracts['test.sol'][contractName].abi,
    output.contracts['test.sol'][contractName].evm.bytecode
  ];
};

(async () => {
  // const { hasQuadraticVoting, name: daoName, owner, tokenCap, tokenName } = req.body;
  const fileBuf = fs.readFileSync('contracts/Greeter.sol');
  const [abi, byteCode] = compile(fileBuf.toString('utf8'), 'Greeter');
  // const Factory = new ContractFactory(abi, byteCode);
  const Greeter = await ethers.getContractFactory('Greeter');
  const contract = await Greeter.deploy('hello');
  console.log(contract, contract.address);
})();
*/