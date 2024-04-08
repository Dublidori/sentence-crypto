import React from 'react';
import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import theme from '../assets/theme/theme.js';
import Navbar from '../components/Navbar/Navbar';
import Sentence from '../components/Sentence/Sentence';
import Leaderboard from '../components/Leaderboard/Leaderboard';

// This data would likely come from state or props in a real application
const leaderboardEntries = [
    { text: 'Cryptography Enthusiast', amount: 4.2 },
    // ...more entries
];

const Home = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar />
            <Sentence />
            <Leaderboard entries={leaderboardEntries} />
        </ThemeProvider>
    );
};

export default Home;
