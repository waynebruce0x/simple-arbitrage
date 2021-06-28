async function main() {
    // ethers is avaialble in the global scope
    const [deployer] = await ethers.getSigners();
    console.log(
      "Deploying the contracts with the account:",
    deployer.address
    );
  
    console.log("Account balance:", (await deployer.getBalance()).toString());
    const FlashBotsMultiCall = await ethers.getContractFactory("FlashBotsMultiCall");
    const flashBotsMultiCall = await FlashBotsMultiCall.deploy("0x591995765c1f8281eB84bf18E435dB310755d8A3");
    await flashBotsMultiCall.deployed();
    console.log("address:", flashBotsMultiCall.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      //console.error(error);
      process.exit(1);
    });