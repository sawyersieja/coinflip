import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';

//check if the users wallet is connected
//if users wallet is not connected, tell them to connect their wallet

function LandingPage() {
    const navigate = useNavigate();

    useEffect(() => {
        const checkWalletConnection = async () => {
            if (window.ethereum) {
                try {
                    const accounts = await window.ethereum.request({ method: 'eth_accounts' });
                    if (accounts.length > 0) {
                        navigate('/coin-flip');
                    }
                } catch (error) {
                    console.error("Error fetching accounts", error);
                }
            } else {
                console.log('Please install MetaMask!');
            }
        };

        checkWalletConnection();
    }, [navigate]);

    const connectWallet = async () => {
        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            if (accounts.length > 0) {
                navigate('/coin-flip');
            }
        } catch (error) {
            console.error('Error connecting to MetaMask', error);
        }
    };

    return (
        <div>
            <center>
                <h1>Welcome to the Coin Flip dApp</h1>
                <Button variant="contained" onClick={connectWallet}>Connect MetaMask Wallet</Button>
            </center>
        </div>
    );
}

export default LandingPage;