// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const Results = await hre.ethers.getContractFactory("ResultsNFT");
  const result = await Results.deploy();

  await result.deployed();

  console.log("Results NFT deployed to:", result.address);
  const created = await result.ResultNFT(
    "4.82",
    "164271",
    "University of Lagos"
  );
  const tokenId = await created.wait();
  console.log("Created:", created);
  console.log("Created:", tokenId.events[0].args.tokenId);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
