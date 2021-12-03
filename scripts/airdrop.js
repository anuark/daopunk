const hre = require("hardhat");

const tokenAddr = "0xb2A0381Eeeca8849128C583bf8a508D549628CDC";
const totalSupply = 10_000_000;
const addrs = [
  "0x1A4B691738C9c8Db8f2EDf0b9207f6acb24ADF07",
  "0x37c5B029f9c3691B3d47cb024f84E5E257aEb0BB",
  "0xD5d1bb95259Fe2c5a84da04D1Aa682C71A1B8C0E",
  "0x37c5B029f9c3691B3d47cb024f84E5E257aEb0BB",
  "0x6e484271C19b9eCEbFd390601c50b4C9F8ea03c0",
  "0x6001d8b7BC2b3125eb1793220411C49145fa9989",
  "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
  "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
]

async function main() {
  const token = await ethers.getContractAt("Token", tokenAddr);
  const share = Math.floor((totalSupply - 500_000) / addrs.length);

  for(let i = 0; i < addrs.length; i++) {
    await token.transfer(addrs[i], ethers.utils.parseEther(share.toString()));
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
