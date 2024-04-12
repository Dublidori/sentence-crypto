import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Typography, Modal, Box, TextField, Button } from '@mui/material';
import './NavbarStyles.css'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false);

    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

    //SCROLLS NAVIGATION

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };

    return (
        <Box className={color ? 'header header-bg' : 'header'}>
            <Typography variant='h2' color='primary' onClick={scrollToTop} 
            sx={{
                cursor: 'pointer',
                '&:hover': {
                  color: 'white',
                },
              }}>
                Bitphrase
                </Typography>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <w3m-button />
                </li>
                <li style={{ display: 'flex', alignItems: 'center' }}>
                    <Typography onClick={() => { scrollToSection('about-section'); closeMenu(); }} sx={{
                        cursor: 'pointer',
                        color: 'white', '&:hover': { color: '#0f0' },
                    }}>About</Typography>
                </li>
            </ul>
            <Box className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes size={20} style={{ color: '#fff' }} />) : (<FaBars size={20} style={{ color: '#fff' }} />)}

            </Box>
        </Box >
    )
}

export default Navbar
