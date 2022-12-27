require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-web3");

//require("dotenv/config");
require("dotenv").config({ path: ".env" });

if (process.env.REPORT_GAS) {
  require("hardhat-gas-reporter");
}

//const accounts = process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [];
const PRIVATE_KEY = process.env.PRIVATE_KEY;

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.10",
  //   settings: {
  //     optimizer: {
  //       enabled: true,
  //       runs: 1000000,
  //     },
  //   },
  // },
  // gasReporter: {
  //   currency: 'USD',
  // },
  // namedAccounts: {
  //   deployer: {
  //     default: 1,
  //   },
  // },
  // paths: {
  //   sources: "./contracts",
  // },
  networks: {
    testnet: {
      url: process.env.JSON_RPC,
      chainId: 44787,
      gasPrice: 20 * 10 ** 9,
      accounts: [
        process.env.PRIVATE_KEY.startsWith("0x")
          ? process.env.PRIVATE_KEY
          : `0x${process.env.PRIVATE_KEY}`,
      ],
    },
  },
};
