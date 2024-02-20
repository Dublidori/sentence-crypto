import React from 'react'
import { Link } from 'react-router-dom'
import './SentenceStyles.css'

import spaceVideo from '../../assets/space.mp4'

const Sentence = () => {
    const HARDCODED_SENTENCE = 'Whosyourdaddy';

    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={spaceVideo} type='video/mp4' />
            </video>
            <div className='content'>
                <h1>{HARDCODED_SENTENCE}</h1>
            </div>
        </div>
    )
}

export default Sentence
