const alchemyApiKey = process.env.ALCHEMY_API_KEY;
const privateKey = process.env.GOERLI_PRIVATE_KEY;
const contractAddress = process.env.CONTRACT_ADDRESS;

const { ethers } = require("hardhat");
const contractInterface = require("../artifacts/contracts/Token.sol/Token.json");

const recieverPk = "652736b635818085a358552bfcc6dc5b5a2c3488aa5ccd68c9c7ff4f618a14ce";

const alchemyProvider = new ethers.providers.AlchemyProvider("goerli", alchemyApiKey);
const signer = new ethers.Wallet(privateKey, alchemyProvider);
const tokenContract = new ethers.Contract(contractAddress, contractInterface.abi, signer);

async function main() {
    const reciever = new ethers.Wallet(recieverPk, alchemyProvider);
    console.log(reciever.address);
    console.log(await tokenContract.totalSupply());
    const tx = await tokenContract.transfer(reciever.address, 100);
    await tx.wait();
}

main();
