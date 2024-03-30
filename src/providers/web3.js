import { ethers } from 'ethers';
import contractABI from './BitphraseABI.json'; // Adjust the path as needed if it's in a different folder

const contractAddress = '0x85a2b7609Fc92181a2A5fb565D2895B5a1D7835C';

// Function to initiate payment
export const bid = async (sentenceInput, cryptoAmount) => {
  // Ensure MetaMask is available
  if (typeof window.ethereum === 'undefined') {
    alert('Please install MetaMask!');
    throw new Error('MetaMask is not installed');
  }

  try {
    // Request account access if needed
    await window.ethereum.request({ method: 'eth_requestAccounts' });

    // Create an instance of ethers provider
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    // Create a signer
    const signer = provider.getSigner();

    // Create a contract instance
    const contract = new ethers.Contract(contractAddress, contractABI, signer);

    // Convert the ether value to Wei
    const valueInWei = ethers.utils.parseEther(cryptoAmount);

    // Make the transaction
    const tx = await contract.bid(sentenceInput, { value: valueInWei });
    console.log('Transaction sent:', tx.hash);

    // Wait for the transaction to be mined
    await tx.wait();
    console.log('Transaction confirmed:', tx.hash);

    return tx;
  } catch (error) {
    console.error('Transaction failed:', error);
    throw error;
  }
};
