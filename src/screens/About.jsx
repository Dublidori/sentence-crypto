import React from 'react';
import { Typography, Modal, Box, TextField, Button } from '@mui/material';
import Navbar from '../components/Navbar/Navbar';

const About = () => {

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            {/* About us version 1 */}
            <Box id="about-section" className='hero'>
				<Box className="about-content"
					sx={{
						display: 'flex',
						height: '100vh',
						flexDirection: 'column',
						justifyContent: 'center',
						textAlign: 'center',
						px: '8%',
					}}
				>
					<Typography
						variant='h1'
						sx={{
							py: '2%',
						}}
					>
						About Bitphrase
					</Typography>

					<Typography
						variant='string'
						color='primary'
						sx={{
							py: '1%',
						}}
					>

						Welcome to Bitphrase, a groundbreaking web3 platform that revolutionizes how value and words intersect in the digital space.
						Here, your cryptocurrency isn't just a token of exchange—it's your voice.

					</Typography>

					<Typography
						variant='string'
						color='primary'
						sx={{
							py: '1%',
						}}
					>

						Our unique bidding system allows the highest bidder to immortalize their message, thought, or statement on our website,
						showcasing the power of blockchain to create a dynamic and ever-changing canvas of community expressions. Whether it's a
						declaration of love, a philosophical musing, or a shoutout, your words gain a place of honor, powered by your investment.

					</Typography>

					<Typography
						variant='string'
						color='primary'
						sx={{
							py: '1%',
						}}
					>

						This isn't just about displaying messages; it's about creating a new form of digital art where monetary value meets personal expression.
						Dive into Bitphrase, where every bid is a chance to make your mark on the blockchain in a way that's visible, impactful, and uniquely yours.

					</Typography>

					<Typography
						variant='string'
						color='primary'
						sx={{
							py: '1%',
						}}
					>

						Join us in this adventure as we explore the boundaries of expression in the web3 era. Your words, powered by crypto, have the stage. What will you say?

					</Typography>
				</Box>
			</Box>

            {/* About us version 2 */}
            {/* <Box id="about-section" className='hero'>
                <Box className="about-content"
                    sx={{
                        display: 'flex',
                        height: '100vh',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        textAlign: 'center',
                        px: '8%',
                    }}
                >
                    <Typography
                        variant='h1'
                        sx={{
                            py: '2%',
                        }}
                    >
                        Welcome to Bitphrase Elite
                    </Typography>

                    <Typography
                        variant='string'
                        color='primary'
                        sx={{
                            py: '1%',
                        }}
                    >
                        Step into the realm of Bitphrase Elite, where the elite meet to speak. Here, your wealth doesn’t just grow; it speaks volumes. At Bitphrase Elite, your cryptocurrency transcends its economic value, becoming a beacon of your personal ethos and influence.
                    </Typography>

                    <Typography
                        variant='string'
                        color='primary'
                        sx={{
                            py: '1%',
                        }}
                    >
                        Engage in our exclusive bidding war where the top bidders earn the privilege to etch their statements on the forefront of our digital platform, turning fleeting thoughts into permanent legends. Whether you’re proclaiming a triumphant win, offering a timeless quote, or immortalizing a private joke, your words will be enshrined in the annals of the digital world.
                    </Typography>

                    <Typography
                        variant='string'
                        color='primary'
                        sx={{
                            py: '1%',
                        }}
                    >
                        It’s not merely about posting messages; it’s about pioneering a new genre of expression where opulence meets originality. Dive into the exclusive world of Bitphrase Elite, where every bid is not just a transaction, but a testament to your stature and a statement of your legacy.
                    </Typography>

                    <Typography
                        variant='string'
                        color='primary'
                        sx={{
                            py: '1%',
                        }}
                    >
                        Join the vanguard of the web3 era with Bitphrase Elite. Here, your cryptocurrency is your megaphone. What will your legacy say?
                    </Typography>
                </Box>
            </Box> */}
        </>
    )
}

export default About;
