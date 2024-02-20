import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import spaceVideo from './../assets/space.mp4';

const About = () => {
    return (
        <>
            <Navbar />
            <div className='hero'>
                <video autoPlay loop muted id='video'>
                </video>
                <section className="about-content" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh', // This assumes the video or hero section takes full viewport height
                    textAlign: 'center',
                    padding: '0 20px', // Adds padding on the sides for better readability on smaller screens
                }}>
                    {/* Updated about page text to match the project's theme */}
                    <h1>About Bitphrase</h1>
                    <p>Welcome to Bitphrase, a groundbreaking web3 platform that revolutionizes how value and words intersect in the digital space. Here, your cryptocurrency isn't just a token of exchange—it's your voice.</p>
                    <p>Our unique bidding system allows the highest bidder to immortalize their message, thought, or statement on our website, showcasing the power of blockchain to create a dynamic and ever-changing canvas of community expressions. Whether it's a declaration of love, a philosophical musing, or a shoutout, your words gain a place of honor, powered by your investment.</p>
                    <p>This isn't just about displaying messages; it's about creating a new form of digital art where monetary value meets personal expression. Dive into Bitphrase, where every bid is a chance to make your mark on the blockchain in a way that's visible, impactful, and uniquely yours.</p>
                    <p>Join us in this adventure as we explore the boundaries of expression in the web3 era. Your words, powered by crypto, have the stage. What will you say?</p>
                </section>
            </div>
        </>
    )
}

export default About;
