import React from 'react';
import { Container, CssBaseline, ThemeProvider, Box } from '@mui/material';
import theme from '../assets/theme/theme.js';
import Navbar from '../components/Navbar/Navbar';
import Sentence from '../components/Sentence/Sentence';
import Leaderboard from '../components/Leaderboard/Leaderboard';
import matrix from "../assets/matrix.gif";

// This data would likely come from state or props in a real application
const leaderboardEntries = [
    { text: 'Cryptography Enthusiast', amount: 4.2 },
    // ...more entries
];

const Home = () => {
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
        </ThemeProvider>
    );
};

export default Home;
