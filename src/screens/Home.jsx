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
    { text: 'Joni is the best', amount: 0.14, wallet: '0x85a2b7609Fc92181a2A5fb565D2895B5a1D7835C', date: 1638352800 },
    { text: 'The quote', amount: 0.01, wallet: '0x85a2b7609Fc92181a2A5fb565D2895B5a1D7835C', date: 1638352800 },
    { text: 'Testing', amount: 0.002, wallet: '0x85a2b7609Fc92181a2A5fb565D2895B5a1D7835C', date: 1638352800 },
    // ...more entries
];

const Home = () => {
    const { open, setIsOpen, response, setResponse } = useContext(Web3Context);

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
                open={open}
                severity="success"
                variant="filled"
                onClose={handleOpen}
                sx={{ width: '100%'}}
            >
                <Alert
                    onClose={handleOpen}
                    severity={ response.error ? "error" : "success"}
                    variant="filled"
                    sx={{ width: 'auto', maxWidth: '100%', color: 'white', fontWeight: 900 }}
                >
                    {response.error && response.error}
                    {!response.error && response.response}
                </Alert>
            </Snackbar>
        </ThemeProvider>
    );
};

export default Home;
