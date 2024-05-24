// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract CoinFlip {

    /*
    * This function simulates the logic of a coin flip.
    *   Takes the block timestamp (uint) and % by 2.
    *   This gives a uint value of either 0 or 1.
    *   Return "Heads" if the value is 0
    *   Returns "Tails" if the value is not 0 aka 1.   
    */
    function simulateFlip() public view returns(string memory){
        return ((block.timestamp) % 2) == 0 ? "Heads" : "Tails";
    }
}