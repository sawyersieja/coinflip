// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract CoinFlip {
    
    event FlipOutcome(
        string result,
        uint256 timestamp,
        uint256 prevrandao,
        address sender,
        uint256 randomValue
    );
    
    /*
    * This function simulates the logic of a coin flip.
    *   Takes the block timestamp (uint) and % by 2.
    *   This gives a uint value of either 0 or 1.
    *   Return "Heads" if the value is 0
    *   Returns "Tails" if the value is not 0 aka 1.   
    */
    function simulateFlip() public returns(string memory){
        uint256 timestamp = block.timestamp;
        uint256 prevrandao = block.prevrandao;
        address sender = msg.sender;

        uint256 randomValue = uint256(keccak256(abi.encodePacked(prevrandao, timestamp, sender)));

        string memory result = (randomValue % 2 == 0) ? "Heads" : "Tails";

        emit FlipOutcome(result, timestamp, prevrandao, sender, randomValue); 
        return result;
    }
}