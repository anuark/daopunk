const solc = require('solc');

// const output = JSON.parse(solc.compile(JSON.stringify(input)));

/**
 * @var content Buffer
 * @return [byteCode, ABI]
 */
const compile = (fileBuf, name) => {
  // const [Token, SafeMath, Timelock, GovernorAlpha] = files;
  const input = {
    language: 'Solidity',
    sources: {
      "name": {
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
  const output = JSON.parse(solc.compile(JSON.stringify(input)));
  console.log(output);
  // if (output.errors) {
  //   throw 'compilation error!!'
  // }

  let res;

  switch(name) {
    case 'Token.sol':
      res = [output.contracts.name.Token.abi, output.contracts.name.Token.evm.bytecode];
      break;
    case 'Timelock.sol':
      res = [output.contracts.name.Timelock.abi, output.contracts.name.Timelock.evm.bytecode];
      break;
    case 'GovernorAlpha.sol':
      res = [output.contracts.name.GovernorAlpha.abi, output.contracts.name.GovernorAlpha.evm.bytecode];
      break;
  }

  return res;
};

export {
  compile
};
