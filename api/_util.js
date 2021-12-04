const solc = require('solc');


// const output = JSON.parse(solc.compile(JSON.stringify(input)));

/**
 * @var content Buffer
 * @return [byteCode, ABI]
 */
const compile = (files, contractName) => {
  const [Token, SafeMath, Timelock, GovernorAlpha] = files;
  const input = {
    language: 'Solidity',
    sources: {
      // 'Token.sol': {
      //   Token
      // },
      // 'SafeMath.sol': {
      //   SafeMath
      // },      
      // 'Timelock.sol': {
      //   Timelock
      // },
      'GovernorAlpha.sol': {
        GovernorAlpha
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

  function findImports(path) {
  if (path === 'Token.sol') {
  const fileBufToken = fs.readFileSync('../contracts/Token.sol');
    return {
      contents:
        fileBufToken
    };
  } 
  if (path === 'SafeMath.sol') {
  const fileBufMath = fs.readFileSync('../contracts/SafeMath.sol');
    return {
      contents:
        fileBufMath
    };
  }
  if (path === 'Timelock.sol') {
  const fileBufTime = fs.readFileSync('../contracts/Timelock.sol');
    return {
      contents:
        fileBufTime
    };
  }

  else return { error: 'File not found' };
}
  
  const output = JSON.parse(solc.compile(JSON.stringify(input)));
  console.log(output);
  if (output.errors) {
    throw 'compilation error!';
  }
  return [
    output.contracts['GovernorAlpha.sol'][contractName].abi,
    output.contracts['GovernorAlpha.sol'][contractName].evm.bytecode
  ];
};

export {
  compile
};
