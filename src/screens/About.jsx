import React from 'react';
import { Typography, Modal, Box, TextField, Button } from '@mui/material';
import Navbar from '../components/Navbar/Navbar';

const About = () => {

	const scrollToSection = (sectionId) => {
		document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<>
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

						Our unique bidding system allows the highest bidder to immortaliz e their message, thought, or statement on our website,
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
		</>
	)
}

export default About;
