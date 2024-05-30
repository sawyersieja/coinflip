import React from 'react';
import { ethers } from 'ethers';

import Button from '@mui/material/Button';

import CoinFlipABI from './abis/CoinFlip.json';


function CoinFlipPage() {

    async function flipCoin() {

        try {

            const provider = new ethers.BrowserProvider(window.ethereum);
            await provider.send("eth_requestAccounts",[]);
            const signer = await provider.getSigner();
            const contractAddress = "0xeb3F351f5E29C6FfFf91dDaD61DD5d01088E6C26";
            const contractABI = CoinFlipABI.abi;
            const contract = new ethers.Contract(contractAddress, contractABI, signer);

        
            const txResponse = await contract.simulateFlip();
            const receipt = await txResponse.wait();

            console.log('Transaction receipt:', receipt);
            //const result = await contract.simulateFlip();

            const event = receipt.logs
                .map(log => {
                    try {
                        return contract.interface.parseLog(log);
                    } catch (error) {
                        console.error('Error parsing log:', error);
                        return null;
                    }
                })
                .find(parsedLog => parsedLog && parsedLog.name === 'FlipOutcome');

            if (event) {
                const result = event.args.result;
                const timestamp = event.args.timestamp ? event.args.timestamp.toString() : 'undefined';
                const prevrandao = event.args.prevrandao ? event.args.prevrandao.toString() : 'undefined';
                const sender = event.args.sender;
                const randomValue = event.args.randomValue ? event.args.randomValue.toString() : 'undefined';
            
                console.log('Coin flip result:', result);
                console.log('Timestamp:', timestamp);
                console.log('PrevRandao:', prevrandao);
                console.log('Sender:', sender);
                console.log('Random Value:', randomValue);
                document.getElementById("resultDisplay").innerText = `Result: ${result} \n\n\ntimestamp: ${timestamp}, \nprevrandao: ${prevrandao}, \n"psuedo-random" value: ${randomValue}`;
            } else {
                console.log('No FlipOutcome event found');
                document.getElementById("resultDisplay").innerText = 'No event found';
            } 
        } catch (error) {
            console.error('Error flipping coin:', error);
            document.getElementById("resultDisplay").innerText = "Error flipping coin. Check console.";
        }
    }

    return (
        <div>
            <center>
                <h1>Coin Flip</h1>
                <Button variant="contained" onClick={() => flipCoin()}>Flip Coin</Button>
                <p id="resultDisplay"></p>
            </center>
        </div>
    );
}

export default CoinFlipPage;