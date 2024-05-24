# coinflip

This project simulates the results of a coin flip utilizing psuedo-randomness.

## Description
  
Due to psuedorandomness, the coin flip program should not be used for anything of value or importance.
While psuedo-random, the use of block.timestamp is predictable and can potentially be influenced by miners.
I will later create a separate smart contract that can make use of verifiable randomness.

## Instructions

Go to the website https://remix.ethereum.org

In the File Explorer workspace, delete all other files and folders.

You should now have an empty workspace.

Right-click the empty work space and select 'New File'.

Type in the name 'CoinFlip.sol' and press enter.

You should now have an empty file opened in the code editor called CoinFlip.sol.


Open a new tab in your browser.


Now go to the file in this repository named CoinFlip.sol.

Copy the code inside this repository.

Paste the code inside the empty file in remix.

Click on Solidity compiler on the left hand side.

Verify the compiler is the correct version(I used 0.8.19).

Click the 'Compile CoinFlip.sol' button.

You should now have a green check mark on the left hand side.

Underneath that, click 'Deploy & run transactions'.

There should be an orange button that says 'Deploy', click that.


Scroll to the bottom to the section where it says 'Deployed/Unpinned Contracts'.

There should be a '>' button followed by COINFLIP AT and some address.

Click the '>' button to expand the view.

Finally, there should be a button called 'simulateFlip'.

Click the 'simulateFlip' button to return a "Heads" or "Tails" value.


Note: Due to psuedo-randomness being employed by block.timestamp, if you click fast enough, results can be predictable or potentially abused by miners.
This is why you should not use this psuedo-randomness for anything valuable or important. We need to make use of VRF(verifiable randomness functions) in future projects in order to get truly random, and fair outcomes.
