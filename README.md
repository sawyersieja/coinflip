# coinflip

This project simulates the results of a coin flip utilizing psuedo-randomness, and the Ethereum blockchain Sepolia test network.

![Screenshot of Coin Flip](https://raw.githubusercontent.com/sawyersieja/coinflip/main/Coin_Flip.PNG)

## Description
  
Due to psuedo-randomness, the coin flip program should not be used for anything of value or importance.
While psuedo-random, the use of prevrandao(which returns a uint256 value from the latest published block available on chain) does have an attack vector for block.prevrandao. The attack will call whatever function that gets the randomness for a user, and will revert unless the randomness provided via block.prevrandao is favorable.
https://medium.com/@alexbabits/why-block-prevrandao-is-a-useless-dangerous-trap-and-how-to-fix-it-5367ed3c6dfc

I will later create a separate smart contract that can make use of verifiable randomness.

## Instructions

Will update instructions at a later time. Still a work in progress.

### Conclusion

You should not use this psuedo-randomness for anything valuable or important. We need to make use of VRF(verifiable randomness functions) in future projects in order to get truly random, and fair outcomes.
