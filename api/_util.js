const solc = require('solc');


// const output = JSON.parse(solc.compile(JSON.stringify(input)));

/**
 * @var content Buffer
 * @return [byteCode, ABI]
 */
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

export {
  compile
};
