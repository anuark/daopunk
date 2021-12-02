const hre = require("hardhat");

const govAlphaAddr = "0x1505c74f24DaDB71fa27b00081aEE495FbF6e08E";
const tokenAddr = "0xb2A0381Eeeca8849128C583bf8a508D549628CDC";

async function main() {
  const [addr1] = await ethers.provider.listAccounts();

  const token = await ethers.getContractAt("Token", tokenAddr);
  await token.delegate(addr1);

  const govAlpha = await ethers.getContractAt("GovernorAlpha", govAlphaAddr);
  await govAlpha.castVote(1, true);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
