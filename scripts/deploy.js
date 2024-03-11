const hre = require("hardhat");

async function main() {
  const SupplyChain = await hre.ethers.getContractFactory("SupplyChain"); 
  const contract = await SupplyChain.deploy(); 

  // console.log("Contract object:", contract);

  console.log("Address of contract:", contract.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


