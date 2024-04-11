import React, { useState, useContext } from 'react';
import { Container, CssBaseline, ThemeProvider, Box, Alert } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import theme from '../assets/theme/theme.js';
import Navbar from '../components/Navbar/Navbar';
import Sentence from '../components/Sentence/Sentence';
import Leaderboard from '../components/Leaderboard/Leaderboard';
import matrix from "../assets/matrix.gif";
import { Web3Context } from '../providers/Web3Context.jsx';

// This data would likely come from state or props in a real application
const leaderboardEntries = [
    { text: 'Cryptography Enthusiast', amount: 4.2 },
    { text: 'Cryptography Enthusiast', amount: 4.2 },
    { text: 'Cryptography Enthusiast', amount: 4.2 },
    { text: 'Cryptography Enthusiast', amount: 4.2 },
    { text: 'Cryptography Enthusiast', amount: 4.2 },
    // ...more entries
];

const Home = () => {
    const { open, setIsOpen, response } = useContext(Web3Context);

    const handleOpen = () => {
        setIsOpen(!open)
    }

    return (
        <ThemeProvider theme={theme}>
            <div
                class="bk_Img"
                style={{
                    backgroundImage: "url(" + matrix + ")",
                    backgroundSize: "cover",
                    height: "100vh",
                }}
            >
                <CssBaseline />
                <Navbar />
                <Sentence />
                <Box sx={{ m: 5 }}>
                    <Leaderboard entries={leaderboardEntries} />
                </Box>
            </div>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={true}
                severity="success"
                variant="filled"
                onClose={handleOpen}
            >
                <Alert
                    onClose={handleOpen}
                    severity="success"
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    Transaction Success Your Quote Is In the books of the web3
                </Alert>
            </Snackbar>
        </ThemeProvider>
    );
};

export default Home;
