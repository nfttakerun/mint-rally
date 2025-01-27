import { ethers, upgrades } from "hardhat";

async function main() {
  const EventManagerFactory = await ethers.getContractFactory("EventManager");
  await upgrades.forceImport(
    process.env.POLYGON_EVENTMANAGER_ADDRESS!,
    EventManagerFactory
  );

  const MintNFTFactory = await ethers.getContractFactory("MintNFT");
  await upgrades.forceImport(
    process.env.POLYGON_MINTNFT_ADDRESS!,
    MintNFTFactory
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
