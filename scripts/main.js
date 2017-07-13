/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/


// ************ Simple Explanation ***********
// You will be given a hand of cards that have different values. The goal of these cards is to be as close or equal to the value of 21 without going over that number. The cards have different values. Our number cards have the same value as their number, meaning a number 4 card has a value of 4, number 7 has a value of 7. There are four different card faces that have different values, those fours card faces are the J, Q, K, and the A. The J, Q, and the K cards all have a value of 10. The A cards however can vary in value, it can either have a value of 1 or 11 depending on how close you are to the value of 21.

function handValue (hand) {
  // const vals = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, "10", "J", "Q", "K", "A" ]
  let total = 0
    for (var i = 0; i < hand.length; i++) {
      if ( hand[i] === "10" || hand[i] === "J" || hand[i] === "Q" || hand[i] === "K") {
        total = total + 10
      } else if ( hand[i] === "A" && total <= 10 ) {
        total = total + 11
      } else if ( hand[i] === "A" && total > 10 ){
        total = total + 1
      } else if ( hand[i] <= "9" ){
        total = total + parseInt(hand[i])
      }
    }
    if (total > 21){
        total = total - 10
    }
  return total;
}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
