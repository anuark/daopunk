const hre = require("hardhat");

const govAlphaAddr = "0x1505c74f24DaDB71fa27b00081aEE495FbF6e08E";

async function main() {
  const govAlpha = await ethers.getContractAt("GovernorAlpha", govAlphaAddr);
  await govAlpha.queue(1);
  // we set the delay to 0
  await govAlpha.execute(1);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
