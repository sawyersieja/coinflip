// scripts/deploy.js

async function main() {
    // Get the contract factory.
    const CoinFlip = await ethers.getContractFactory("CoinFlip");
    console.log("Deploying CoinFlip...");

    // Deploy the contract.
    const coinFlip = await CoinFlip.deploy();
    await coinFlip.deployed;
    //await coinFlip.deployTransaction.wait();

    // The contract is already deployed at this point.
    console.log("CoinFlip deployed to:", coinFlip.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error("Deployment failed:", error);
      process.exit(1);
    });
  