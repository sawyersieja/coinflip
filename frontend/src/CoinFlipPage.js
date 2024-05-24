import React from 'react';

function CoinFlipPage() {
    return (
        <div>
            <h1>Coin Flip</h1>
            <button onClick={() => console.log('Flipping coin...')}>Flip Coin</button>
        </div>
    );
}

export default CoinFlipPage;