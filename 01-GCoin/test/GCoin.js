const GCoin = artifacts.require("GCoin");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("GCoin", function (/* accounts */) {
  it("should assert true", async function () {
    await GCoin.deployed();
    return assert.isTrue(true);
  });

  it("should assert totalSupply == 1000 ", async function () {

    const gcoin = await GCoin.deployed();
    ts = await gcoin.totalSupply();

    assert(ts.toString() === '1000');
  });
});
