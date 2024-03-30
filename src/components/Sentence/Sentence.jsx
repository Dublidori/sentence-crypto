import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SentenceStyles.css';
import { ethers } from 'ethers';
import contractABI from './../../providers/BitphraseABI.json'; // Adjust the path as needed

import spaceVideo from '../../assets/space.mp4'

const contractAddress = '0x85a2b7609Fc92181a2A5fb565D2895B5a1D7835C'; // Replace with your smart contract's address

const Sentence = () => {
    const HARDCODED_SENTENCE = 'Whosyourdaddy testing the size like a boss more size more size more size i think with this is ok';

    const [sentence, setSentence] = useState(HARDCODED_SENTENCE);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [sentenceInput, setSentenceInput] = useState('');
    const [cryptoAmount, setCryptoAmount] = useState('');

    const openCryptoModal = () => setIsModalOpen(true);
    const closeCryptoModal = () => setIsModalOpen(false);

    const handleButtonPayment = async () => {
        console.log(cryptoAmount);
        console.log(sentenceInput);
        // Ensure MetaMask is available
        if (typeof window.ethereum === 'undefined') {
            alert('Please install MetaMask!');
            return;
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

            // Optionally reset the state
            setEtherValue('');
        } catch (error) {
            console.error('Transaction failed:', error);
        }
    }

    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={spaceVideo} type='video/mp4' />
            </video>
            <div className='content'>
                <div className="transparent-card">
                    <h1>{sentence}</h1>
                    <button onClick={openCryptoModal} className="crypto-pay-btn">Become the boss</button>
                </div>
            </div>
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close-btn" style={{ color: 'white ' }} onClick={closeCryptoModal}>&times;</span>
                        <h2 style={{ color: 'white ' }}>Pay with Crypto</h2>
                        <div className="form-group">
                            <label style={{ color: 'white ' }} htmlFor="sentenceInput">Your Sentence (max 255 chars):</label>
                            <input
                                type="text"
                                id="sentenceInput"
                                value={sentenceInput}
                                onChange={(e) => setSentenceInput(e.target.value)}
                                maxLength="255"
                                placeholder="Enter your sentence"
                                className="modal-input"
                            />
                        </div>
                        <div className="form-group">
                            <label style={{ color: 'white ' }} htmlFor="cryptoAmount">Amount to Pay:</label>
                            <input
                                type="text"
                                id="cryptoAmount"
                                value={cryptoAmount}
                                onChange={(e) => setCryptoAmount(e.target.value)}
                                placeholder="Enter amount in ETH"
                                className="modal-input"
                            />
                        </div>
                        <button onClick={handleButtonPayment} className="pay-btn">Proceed with MetaMask</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Sentence
