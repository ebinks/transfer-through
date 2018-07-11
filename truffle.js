var secrets = require("./secrets.json");
var HDWalletProvider = require("truffle-hdwallet-provider");
//var mnemonic = secrets.mnemonic;
var Web3 = require('web3');
var web3 = new Web3(Web3.givenProvider || "ws://localhost:8546");

module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*',
      //gasLimit: 6.7e6
    },
    rinkeby: {     
      host: 'localhost',
      port: 8545,
      provider: new HDWalletProvider(secrets.mnemonic, "https://rinkeby.infura.io/"),
      network_id: "*",
      gas: 1000000,
      gasLimit: 67000000,
      gasPrice: web3.utils.toWei("20", "gwei") 
   },
  }

};
