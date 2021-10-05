const GCoin = artifacts.require("GCoin");

module.exports = function(deployer) {
  deployer.deploy(GCoin, '1000');
}

