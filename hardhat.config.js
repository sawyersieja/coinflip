require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const { PRIVATE_KEY, INFURA_API_KEY } = process.env;

const networkUrl = `https://sepolia.infura.io/v3/${INFURA_API_KEY}`;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: networkUrl,
      accounts: [`0x${PRIVATE_KEY}`] // Use environment variables or a secure method to handle privat keys
    }
  }
};
