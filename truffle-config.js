require('dotenv-flow').config();
const HDWalletProvider = require("@truffle/hdwallet-provider");
var Web3 = require('web3');

module.exports = {
  compilers: {
    solc: {
      version: '0.6.12',    // Fetch exact version from solc-bin (default: truffle's version)
      settings: {          // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: true,
          runs: 200
        },
        evmVersion: "istanbul"
      }
    },
  },
  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    etherscan: process.env.ETHERSCAN_API_KEY
  },
  networks: {
    mainnet: {
      network_id: '1',
      provider: () => new HDWalletProvider(
        [process.env.DEPLOYER_PRIVATE_KEY],
        "https://mainnet.infura.io/v3/" + process.env.MAINNET_INFURA_API_KEY,
        0,
        1,
      ),
      gasPrice: Number(process.env.GAS_PRICE),
      gas: 8000000,
      from: process.env.DEPLOYER_ACCOUNT,
      timeoutBlocks: 8000,
    },
    kovan: {
      network_id: '42',
      provider: () => new HDWalletProvider(
        [process.env.DEPLOYER_PRIVATE_KEY],
        "wss://kovan.infura.io/ws/v3/" + process.env.KOVAN_INFURA_API_KEY,
        0,
        1,
      ),
      gasPrice: 1000000000, // 1 gwei
      gas: 8000000,
      from: process.env.DEPLOYER_ACCOUNT,
      timeoutBlocks: 500,
      networkCheckTimeout: 1000000,
    },
    ropsten: {
      network_id: '3',
      provider: () => new HDWalletProvider(
        [process.env.DEPLOYER_PRIVATE_KEY],
        "wss://ropsten.infura.io/ws/v3/" + process.env.ROPSTEN_INFURA_API_KEY,
        0,
        1,
      ),
      gasPrice: 10000000000, // 10 gwei
      gas: 8000000,
      from: process.env.DEPLOYER_ACCOUNT,
      timeoutBlocks: 500,
      networkCheckTimeout: 1000000,
    },
    rinkeby: {
      network_id: '4',
      provider: () => new HDWalletProvider(
        [process.env.DEPLOYER_PRIVATE_KEY],
        "wss://rinkeby.infura.io/ws/v3/" + process.env.RINKEBY_INFURA_API_KEY,
        0,
        1,
      ),
      gasPrice: 1000000000, // 1 gwei
      gas: 8000000,
      from: process.env.DEPLOYER_ACCOUNT,
      timeoutBlocks: 500,
      networkCheckTimeout: 1000000,
    }
  },
};
