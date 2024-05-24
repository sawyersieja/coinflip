import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';

//check if the users wallet is connected
//if users wallet is not connected, tell them to connect their wallet

function LandingPage() {
    const navigate = useNavigate();

    useEffect(() => {
        if (window.ethereum && window.ethereum.isConnected()) {
            navigate('/coin-flip');
        }
    }, [navigate]);

    const connectWallet = async () => {
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            navigate('/coin-flip');
        } catch (error) {
            console.error('Error connecting to MetaMask', error);
        }
    };

    return (
        <div>
            <h1>Welcome to the Coin Flip dApp</h1>
            <Button onClick={connectWallet}>Connect MetaMask Wallet</Button>
        </div>
    );
}

export default LandingPage;