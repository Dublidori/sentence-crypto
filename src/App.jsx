import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './screens/Home';
import Pricing from './screensPricing';
import Training from './screensTraining';
import About from './screensAbout';
import './index.css';

// Added this for github pages setup ( Still need better config with HashRouter to work -> https://reactrouter.com/en/main/router-components/hash-router)
const isGithubPages = window.location.hostname === 'dublidori.github.io';
const basePath = isGithubPages ? '/sentence-crypto/' : '/';

function App() {
    return (
        <Routes>
            <Route path={`${basePath}/`} element={<Home />} />
            <Route path={`${basePath}/pricing`} element={<Pricing />} />
            <Route path={`${basePath}/training`} element={<Training />} />
            <Route path={`${basePath}/about`} element={<About />} />
        </Routes>
    )
}

export default App
