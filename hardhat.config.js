require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {
  solidity: "^0.8.10",
  defaultNetwork: 'localhost',
  networks: {
    // rinkeby: {
    //   url: process.env.ALCHEMY_RINKEBY_URL,
    //   accounts: [process.env.RINKEBY_PRIVATE_KEY]
    // },
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/l6LhfBO7yvbJ2zT6ogc-a-5O62tnnQSM',
      accounts: ['a02007cfef8f1ac2fdabf32259fe02dc73233eed400f8955520861ff0c2f127b']
    },
    hardhat: {
      mining: {
        auto: false,
        interval: [3000, 6000]
      }
    }
  }
};
