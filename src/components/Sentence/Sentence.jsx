import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './SentenceStyles.css';
import { bid, getHighestBidQuote } from '../../providers/web3'; // Adjust the path as needed
import spaceVideo from '../../assets/space.mp4'

const Sentence = () => {
    const HARDCODED_SENTENCE = 'Whosyourdaddy testing the size like a boss more size more size more size i think with this is ok';

    const [sentence, setSentence] = useState(HARDCODED_SENTENCE);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [sentenceInput, setSentenceInput] = useState('');
    const [cryptoAmount, setCryptoAmount] = useState('');

    const openCryptoModal = () => setIsModalOpen(true);
    const closeCryptoModal = () => setIsModalOpen(false);

    const getQuote = () => {
        getHighestBidQuote()
            .then(highestBidQuote => {
                setSentence(highestBidQuote);
            })
            .catch(error => {
                console.error("Error fetching highest bid quote: ", error);
            });
    };

    const handleButtonPayment = async () => {
        try {
            await bid(sentenceInput, cryptoAmount);
            // Optionally reset the state or handle success
            setCryptoAmount('');
            setSentenceInput('');
            setIsModalOpen(false);
        } catch (error) {
            // Handle or display the error
            console.error('Payment failed:', error);
        }
    };

    useEffect(() => {
        getQuote();
    }, [sentence])

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
