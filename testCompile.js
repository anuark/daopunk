const solc = require('solc');
const { ethers } = require('hardhat');
const { ContractFactory } = ethers;
const fs = require('fs');

/**
 * @var content Buffer
 * @return [byteCode, ABI]
 */
const compile = (fileBuf, name) => {
  // const [Token, SafeMath, Timelock, GovernorAlpha] = files;
  const input = {
    language: 'Solidity',
    sources: {
      'contract.sol': {
        content: fileBuf
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
  const compileResult = solc.compile(JSON.stringify(input), { import: findImports });
  const output = JSON.parse(compileResult);

  // if (output.errors) {
  //   console.error(output.errors);
  //   throw 'compilation error!!';
  // }
  console.log(output);
  // process.exit(0);
  // return [
  //   output.contracts['contract.sol'][name].abi, 
  //   output.contracts['contract.sol'][name].evm.bytecode
  // ];
};

const findImports = path => {
  if (path === 'Token.sol') {
    const fileBuf = fs.readFileSync('contracts/Token.sol');

    return {
      contents: fileBuf.toString('utf8')
    };
  } 

  return { error: 'File not found' };
}

(async() => {
  // const { hasQuadraticVoting, name: daoName, owner, tokenCap, tokenName } = req.body;
  const fileBuf = fs.readFileSync('contracts/GovernorAlpha.sol');
  compile(fileBuf.toString('utf8'), 'Token');
  // const [abi, byteCode] = compile(fileBuf.toString('utf8'), 'GovernorAlpha');
  // console.log(abi, 'abi');
  // console.log(byteCode, 'byteCode');
  // const Factory = new ContractFactory(abi, byteCode);
  // const contract = await Greeter.deploy('hello');
  // console.log(contract, contract.address);
})();
