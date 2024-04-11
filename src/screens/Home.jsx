import React from 'react';
import { Container, CssBaseline, ThemeProvider, Box } from '@mui/material';
import theme from '../assets/theme/theme.js';
import Navbar from '../components/Navbar/Navbar';
import Sentence from '../components/Sentence/Sentence';
import Leaderboard from '../components/Leaderboard/Leaderboard';
import matrix from "../assets/matrix.gif";

// This data would likely come from state or props in a real application
const leaderboardEntries = [
    { text: 'Cryptography Enthusiast', amount: 4.2, wallet: '0x85a2b7609Fc92181a2A5fb565D2895B5a1D7835C' },
    { text: 'Top G', amount: 2.2, wallet: '0x85a2b7609Fc92181a2A5fb565D2895B5a1D7835C' },
    { text: 'Woke', amount: 1.2, wallet: '0x85a2b7609Fc92181a2A5fb565D2895B5a1D7835C' },
    { text: 'BITCOIN TO 200k', amount: 0.2, wallet: '0x85a2b7609Fc92181a2A5fb565D2895B5a1D7835C' },
    { text: 'crypto is fun', amount: 0.02, wallet: '0x85a2b7609Fc92181a2A5fb565D2895B5a1D7835C' },
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
