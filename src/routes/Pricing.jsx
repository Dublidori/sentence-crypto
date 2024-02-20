import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import PricingCards from '../components/Pricing'
import HeroImage from '../components/HeroImage'

const Pricing = () => {
    return (
        <div>
            <Navbar />
            <HeroImage heading='PRICING.' text='Choose your trip.' />
            <PricingCards />
            <Footer />
        </div>
    )
}

export default Pricing
