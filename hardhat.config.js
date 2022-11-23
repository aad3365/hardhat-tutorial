require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config();

const alchemyApiKey = process.env.ALCHEMY_API_KEY;
const goerliPrivateKey = process.env.GOERLI_PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/${alchemyApiKey}`,
      accounts: [goerliPrivateKey]
    }
  }
};
