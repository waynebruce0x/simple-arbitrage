async function main() {
    // ethers is avaialble in the global scope
    const [deployer] = await ethers.getSigners();
    console.log(
      "Deploying the contracts with the account:",
      await deployer.getAddress()
    );
  
    console.log("Account balance:", (await deployer.getBalance()).toString());
    const FlashBotsMultiCall = await ethers.getContractFactory("FlashBotsMultiCall");
    const flashBotsMultiCall = await FlashBotsMultiCall.deploy("0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266");
    await flashBotsMultiCall.deployed();
    console.log("address:", flashBotsMultiCall.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });