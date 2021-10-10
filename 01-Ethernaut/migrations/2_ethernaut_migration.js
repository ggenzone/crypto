const Fallback = artifacts.require("Fallback");
const Fallout = artifacts.require("Fallout");

module.exports = function (deployer) {
  deployer.deploy(Fallback);
  deployer.deploy(Fallout);
};
