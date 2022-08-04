require("@nomicfoundation/hardhat-toolbox");

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.10",
  networks: {
    spark: {
      url: "https://rpc.fusespark.io/",
      accounts: ['Private Key']
    },

    fuse: {
      url: "https://rpc.fuse.io/",
      accounts: ['Private key']
    },
  },
};