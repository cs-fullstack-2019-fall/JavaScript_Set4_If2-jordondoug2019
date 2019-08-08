// #### Exercise 10
// Ask the user for 3 cards. If the sum equals 21 print BLACKJACK! If the sum
// is greater than 21 print BUST! If the sum is less than 21 print “The total is [TOTAL]”

var card= prompt("Enter card 1")
var card2=prompt("Enter Card 2")
var card3=prompt("Enter Card 3")

var blackjack= parseInt(card)+parseInt(card2)+parseInt(card3)

if (blackjack === 21)
{
    alert("Blackjack")
}
 else if(blackjack > 21)
 {
     alert("BUST")
 }
 else if (blackjack<21)
    alert ("The total is " + blackjack)
 

// ##### Extra Credit:
//    If it's negative or over 100 print an error.

// var num= prompt ("ENter number: ");

// if (num < 0 || num >100)
// {
//     alert( "Error")
// }
// else
// {
//     alert("no error")
// }