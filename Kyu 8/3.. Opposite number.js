/*
Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).

Examples:

1: -1
14: -14
-34: 34 */


----- Solution ------


function opposite(number) {
 if (number = -number){		// if negative then it returns positve 
   return number
 } else if (number = +number){	// if positive, returns negative
   return -number
 } else {
   return 0			// returns 0 if number is 0
 }
}
