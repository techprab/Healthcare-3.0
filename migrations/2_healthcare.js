var healthcare = artifacts.require("healthcare");

module.exports = function(deployer) {
  // deployment steps
  deployer.deploy(healthcare);
};