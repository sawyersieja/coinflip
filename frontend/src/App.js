import logo from './logo.svg';
import './App.css';

import React from 'react';
import CoinFlipPage from './CoinFlipPage.js';
import LandingPage from './LandingPage.js';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/coin-flip" element={<CoinFlipPage />} />
      </Routes>
    </Router>
  );
}

export default App;
