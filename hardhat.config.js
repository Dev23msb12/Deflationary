require("hardhat-gas-reporter");
require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.8.5",
    settings: {
      optimizer: {
        enabled: true,
        runs: 10000,
      }
    }  
  },
  networks: {
    hardhat: {
        blockGasLimit: 80000000,
    },
  },
  gasReporter: {
    enabled: (process.env.REPORT_GAS) ? true : false,
    currency: 'USD',
    token: "ETH",
  }
};
