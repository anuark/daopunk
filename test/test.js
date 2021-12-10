const { assert } = require("chai");
const { ethers } = require("hardhat");

const { getContractAddress } = ethers.utils;

describe("GovernorAlpha", function () {
  const delay = 2 * 24 * 60 * 60;

  // Create DAO interface state vars
  let hasQuadraticVoting, name, userAddress, tokenCap, tokenName, tokenSymbol, token, govAlpha;

  name = 'Chainshot DAO';
  tokenName = 'Chasma';
  tokenSymbol = 'CHS';
  hasQuadraticVoting = true;
  tokenCap = 10000000;

  // Create Proposal interface state vars
  let targets, target, values, call_method, call_value, description;

  description = 'We proposal a directly democractic transnational society governed by a network of DAOs';
  values = 0;
  call_method = "changeMsg";
  call_value = "Crypto Anarchy!!";

  // Vote on Proprosal interface state vars
  let id, voteBoolSupport, voteBoolReject;

  id = 1;
  voteBoolSupport = true;
  voteBoolReject = false;

  // Test Cases
  beforeEach(async () => {
    [userAddress] = await ethers.provider.listAccounts();

    const Token = await ethers.getContractFactory("Token");
    token = await Token.deploy(userAddress, tokenName, tokenSymbol, tokenCap, hasQuadraticVoting);
    await token.deployed();

    const nonce = await ethers.provider.getTransactionCount(userAddress);
    const govAlphaAddr = getContractAddress({ from: userAddress, nonce: nonce + 1 });

    const Timelock = await ethers.getContractFactory("Timelock");
    const timelock = await Timelock.deploy(govAlphaAddr, delay);
    await timelock.deployed();

    const GovernorAlpha = await ethers.getContractFactory("GovernorAlpha");
    govAlpha = await GovernorAlpha.deploy(timelock.address, token.address, userAddress, name);
    await govAlpha.deployed();

    const Example = await ethers.getContractFactory("Example");
    target = await Example.deploy();
    await target.deployed();
    targets = target.address;
  });

  it("should mint tokens to the address 1", async function () {
    const balance = await token.balanceOf(userAddress);
    assert.equal(balance.toString(), ethers.utils.parseEther("10000000").toString());
  });

  describe("Create Proposal", () => {
    beforeEach(async () => {
      await token.delegate(userAddress);

      // format target contract data
      const calldatas = [target.interface.encodeFunctionData(call_method, [call_value])];

      await govAlpha.propose([targets], [values], calldatas, description);
    });

    it("should have created the proposal", async () => {
      const proposal = await govAlpha.proposals(1);
      assert(proposal.startBlock.gt(0));
    });

    describe("Vote on Proposal", async () => {
      beforeEach(async () => {
        await hre.network.provider.send("evm_mine");
        await govAlpha.castVote(id, voteBoolSupport);

        const { startBlock, endBlock } = await govAlpha.proposals(id);
        const diff = endBlock.sub(startBlock);

        for(let i = 0; i < diff.toNumber(); i++) {
          await hre.network.provider.send("evm_mine");
        }
      });

      it("should change the proposal state", async () => {
        const state = await govAlpha.state(id);
        assert.equal(state.toString(), "4");
      });

      describe("Execute Proposal", () => {
        beforeEach(async () => {
          await govAlpha.queue(id);

          const { eta } = await govAlpha.proposals(id);

          await hre.network.provider.send("evm_setNextBlockTimestamp", [eta.toNumber()]);

          await govAlpha.execute(id);
        });

        it("should change the message", async () => {
          const message = await target.message();
          assert.equal(message, "Crypto Anarchy!!");
          console.log(message);
        });
      });
  
    });
  });
});
