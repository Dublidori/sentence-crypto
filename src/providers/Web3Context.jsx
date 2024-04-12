import React, { createContext, useState, useEffect } from 'react';
import { ethers } from 'ethers';
import contractABI from './BitphraseABI.json'; // Adjust the path as needed if it's in a different folder

const contractAddress = '0x85a2b7609Fc92181a2A5fb565D2895B5a1D7835C';

export const Web3Context = createContext();

export const Web3Provider = ({ children }) => {

    const HARDCODED_SENTENCE = 'Whosyourdaddy testing the size like a boss more size more size more size i think with this is ok';

    // Leaderboard data
    const [leaderboardData, setLeaderBoardData] = useState([]);

    // Trigger Snackbar for handle web3 connections user feedback
    const [open, setIsOpen] = useState(false);

    // web3 Connections response This will be used for the snackbar
    const [response, setResponse] = useState({
        error: null,
        response: '',
        data: null
    });

    // State for THE SENTENCE
    const [sentence, setSentence] = useState(HARDCODED_SENTENCE);

    // Function to initiate payment
    const bid = async (sentenceInput, cryptoAmount) => {
        // TODO: Build this validation generic
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

            setResponse(({
                response: "You've made history in the book of web3 Transaction Confirmed",
                error: null
            }));
            setIsOpen(true);

            return tx;
        } catch (error) {
            console.error('Transaction failed:', error);
            setResponse(prevState => ({
                ...prevState,
                error: error.message
            }));
            setIsOpen(true);
            throw error;
        }
    };

    // Function to read the highest bid quote
    const getHighestBidQuote = async () => {
        try {
            // TODO: Build this validation generic
            if (typeof window.ethereum === 'undefined') {
                alert('Please install MetaMask!');
                throw new Error('MetaMask is not installed');
            }

            // Initialize ethers provider
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            await provider.send("eth_requestAccounts", []); // Prompts user connection

            // Create a contract instance with just the provider, as we're only reading state
            const contract = new ethers.Contract(contractAddress, contractABI, provider);

            // Call the highestBidQuote function
            const highestBidQuote = await contract.highestBidQuote();

            console.log('Highest Bid Quote:', highestBidQuote);

            // setResponse(highestBidQuote);
            setSentence(highestBidQuote);

            return highestBidQuote;
        } catch (error) {
            console.error('Failed to fetch the highest bid quote:', error);
            throw error;
        }
    };

    const getAllBidders = async () => {
        try {
            // Check for MetaMask; this is still useful for reads to handle any network checks or initializations
            if (typeof window.ethereum === 'undefined') {
                alert('Please install MetaMask!');
                throw new Error('MetaMask is not installed');
            }

            // Initialize ethers provider
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            await provider.send("eth_requestAccounts", []); // Prompts user connection

            // Create a contract instance with just the provider, as we're only reading state
            const contract = new ethers.Contract(contractAddress, contractABI, provider);

            // Call the highestBidQuote function
            const leaderboard = await contract.getAllTransactions();

            setLeaderBoardData(leaderboard);
            console.log('Transactions Fetched: ' + leaderboard);

            return leaderboard;
        } catch (error) {
            console.error('Failed to fetch the highest bid quote:', error);
            throw error;
        }
    } 

    return (
        <Web3Context.Provider
            value={{
                bid,
                getHighestBidQuote,
                response,
                sentence,
                open,
                setIsOpen,
                setResponse,
                getAllBidders
            }}
        >
            {children}
        </Web3Context.Provider>
    );
}

