import React, { useEffect, useState, useContext } from 'react';
import { Typography, Modal, Box, TextField, Button } from '@mui/material';
import { Web3Context } from '../../providers/Web3Context.jsx';

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: '#111',
    border: '2px solid #0f0',
    boxShadow: 24,
    p: 4,
};

const Sentence = () => {
    const { bid, getHighestBidQuote, response, sentence } = useContext(Web3Context);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [sentenceInput, setSentenceInput] = useState('');
    const [cryptoAmount, setCryptoAmount] = useState('');

    useEffect(() => {
        getHighestBidQuote();
    }, [getHighestBidQuote]);

    const handleButtonPayment = async () => {
        try {
            await bid(sentenceInput, cryptoAmount);
            setCryptoAmount('');
            setSentenceInput('');
            setIsModalOpen(false);
        } catch (error) {
            console.error('Payment failed:', error);
        }
    };

    return (
        <React.Fragment>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', pt: 15 }}>
                <Box sx={{ backgroundColor: 'rgba(0,0,0,0.5)', p: 4, textAlign: 'center',  }}>
                    <Typography variant="h1" component="h1" color="white" gutterBottom sx={{ wordWrap: 'break-word', fontSize: 64 }}>
                        {sentence}
                    </Typography>
                    <Button variant="outlined" color="primary" onClick={() => setIsModalOpen(true)}>
                        Become the boss
                    </Button>
                </Box>
            </Box>

            <Modal
                open={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={modalStyle}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Pay with Crypto
                    </Typography>
                    <TextField
                        margin="normal"
                        fullWidth
                        id="sentenceInput"
                        label="Your Sentence (max 255 chars)"
                        value={sentenceInput}
                        onChange={(e) => setSentenceInput(e.target.value)}
                        inputProps={{ maxLength: 255 }}
                        placeholder="Enter your sentence"
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        id="cryptoAmount"
                        label="Amount to Pay"
                        value={cryptoAmount}
                        onChange={(e) => setCryptoAmount(e.target.value)}
                        placeholder="Enter amount in ETH"
                    />
                    <Button variant="contained" fullWidth onClick={handleButtonPayment} sx={{ mt: 2 }}>
                        Proceed with MetaMask
                    </Button>
                </Box>
            </Modal>
        </React.Fragment>
    );
};

export default Sentence;
