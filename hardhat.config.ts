import { config as dotEnvConfig } from "dotenv";
dotEnvConfig();

import { HardhatUserConfig } from "hardhat/types";

import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "@nomiclabs/hardhat-etherscan";
import "solidity-coverage";

const ETHERSCAN_KEY = process.env.ETHERSCAN_KEY;

const PROVIDER_URL_RINKEBY = process.env.PROVIDER_URL_RINKEBY;
const PRIVATE_KEY_RINKEBY = process.env.TESTNET_DEPLOY_PRIVATE_KEY;

const PROVIDER_URL_MAINNET = process.env.PROVIDER_URL_MAINNET;
const PRIVATE_KEY_MAINNET = process.env.DEPLOY_PRIVATE_KEY;

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  solidity: {
    compilers: [{ version: "0.8.0", settings: {} }],
  },
  networks: {
    hardhat: {},
    localhost: {},
    rinkeby: {
      url: PROVIDER_URL_RINKEBY,
      accounts: [`${PRIVATE_KEY_RINKEBY}`],
    },
    mainnet: {
      url: PROVIDER_URL_MAINNET,
      accounts: [`${PRIVATE_KEY_MAINNET}`],
    },
    coverage: {
      url: "http://127.0.0.1:8555", // Coverage launches its own ganache-cli client
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_KEY,
  },
};

export default config;
