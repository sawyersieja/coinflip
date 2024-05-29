// scripts/deploy.js
async function main() {
    // Get the contract factory.
    console.log("Starting smart contract deployment process...");
    const CoinFlip = await ethers.getContractFactory("CoinFlip");
    console.log("Contract factory loaded.");

    // Deploy the contract.
    console.log("Deploying the CoinFlip contract to the blockchain...");
    const coinFlip = await CoinFlip.deploy();
    
    // This line of code makes it so we wait for 1 block confirmation before proceeding.
    await coinFlip.deploymentTransaction().wait(1);
    console.log("Deployment transaction has been successfully mined.");

    // I was getting a lot of issues when trying to use coinFlip.address.
    // I found a solution to use .target instead.
    // https://stackoverflow.com/questions/77117163/unable-to-get-the-deployed-contract-address-using-etherjs
    console.log("CoinFlip deployed to this contract address:", coinFlip.target);  
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error("Deployment failed:", error);
      process.exit(1);
    });
  