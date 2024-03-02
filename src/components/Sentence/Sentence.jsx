import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SentenceStyles.css';
import { useAccount, useWriteContract, useSimulateContract, useConnect } from 'wagmi';
import { useWeb3Provider } from '../../providers/web3.js'

import spaceVideo from '../../assets/space.mp4'
import BitphraseABI from './../../providers/BitphraseABI.json'; // Adjust the path as needed
import { parseEther } from 'viem'

import { wagmiConfig } from '../../config/wagmiConfig.js';

const contractAddress = '0x85a2b7609Fc92181a2A5fb565D2895B5a1D7835C'; // Replace with your smart contract's address

const Sentence = () => {
    const { writeContract } = useWriteContract();
    const { isConnected } = useAccount();

    console.log(isConnected);
    
    const { getAccountStatus, handlePayment } = useWeb3Provider();
    const HARDCODED_SENTENCE = 'Whosyourdaddy testing the size like a boss more size more size more size i think with this is ok';

    const [sentence, setSentence] = useState(HARDCODED_SENTENCE);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [sentenceInput, setSentenceInput] = useState('');
    const [cryptoAmount, setCryptoAmount] = useState('');

    const openCryptoModal = () => setIsModalOpen(true);
    const closeCryptoModal = () => setIsModalOpen(false);

    const handleButtonPayment = () => {
        console.log(cryptoAmount);
        console.log(sentenceInput);
        handlePayment(cryptoAmount, sentenceInput);
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
                        <span className="close-btn" style={{ color: 'white '}} onClick={closeCryptoModal}>&times;</span>
                        <h2 style={{ color: 'white '}}>Pay with Crypto</h2>
                        <div className="form-group">
                            <label style={{ color: 'white '}} htmlFor="sentenceInput">Your Sentence (max 255 chars):</label>
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
                            <label style={{ color: 'white '}} htmlFor="cryptoAmount">Amount to Pay:</label>
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
