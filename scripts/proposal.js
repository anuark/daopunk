const hre = require("hardhat");

const exampleAddr = "0xC86Df794BBf12F19476149813efAD3ECfa8b10Fd";
const govAlphaAddr = "0x1505c74f24DaDB71fa27b00081aEE495FbF6e08E";
const tokenAddr = "0xb2A0381Eeeca8849128C583bf8a508D549628CDC";

async function main() {
  const [addr1] = await ethers.provider.listAccounts();
  const token = await ethers.getContractAt("Token", tokenAddr);
  await token.delegate(addr1);
  const example = await ethers.getContractAt("Example", exampleAddr);

  const targets = [exampleAddr];
  const values = ["0"];
  const signatures = [""];
  const calldatas = [example.interface.encodeFunctionData("changeMsg", ["Anarchy!"])];
  const description = "Setting a new message!";

  const govAlpha = await ethers.getContractAt("GovernorAlpha", govAlphaAddr);
  const tx = await govAlpha.propose(targets, values, signatures, calldatas, description);
  const receipt = await tx.wait();

  console.log(receipt);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
