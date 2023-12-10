// Import the necessary libraries
import ethers from "ethers";
import Web3, { eth, providers } from "web3";

// Define contract ABI
const abi = [
  // ... Your ABI definition
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balances",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "close",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

// Initialize the contract
const ContractAddress = "0x545506D72a7F3427dD94aB92a3E07b4c8972cb72";
const contract = new eth.Contract(abi, ContractAddress);

// Main function
async function p() {
  console.log("HI");
  await connect();
}

// Connect function
async function connect() {
  console.log("haha");

  let web3;

  // Wait for loading completion to avoid race conditions with web3 injection timing.
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    try {
      // Request account access if needed
      await window.ethereum.enable();
      console.log("connected metamask");
      // Accounts now exposed
      await fund1();
    } catch (error) {
      console.error(error);
    }
  } else if (window.web3) {
    // Use Mist/MetaMask's provider.
    web3 = new Web3(window.web3.currentProvider);
    console.log("Injected web3 detected.");
    await fund1();
  } else {
    // Fallback to localhost; use dev console port by default...
    const provider = new providers.HttpProvider("http://127.0.0.1:9545");
    web3 = new Web3(provider);
    console.log("No web3 instance injected, using Local web3.");
    await fund1();
  }

  // Function to interact with the contract
  async function fund1() {
    console.log("new fund1");
    const accounts = await web3.eth.getAccounts();
    const userAddress = accounts[0];
    console.log("my metamask:", userAddress);
    const amount = web3.utils.toWei("0.01", "ether"); // Convert 0.01 Ether to wei

    // Ensure that the contract is set up with the correct provider
    contract.setProvider(web3.currentProvider);

    // Example interaction with the contract (deposit)
    try {
      const tx = await contract.methods.deposit().send({
        from: userAddress,
        value: amount,
      });

      console.log("Transaction details:", tx);
    } catch (error) {
      console.error("Error interacting with the contract:", error);
    }
  }
}

// Call the main function when the page is loaded
document.addEventListener("DOMContentLoaded", p);
