/*    In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)
Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)    */

/////////////////////////////////////////////
//////////////// SOLUTION //////////////////

function squareDigits(num) {
  let newNum = Number(        // Number() to get final output as number 
    Array.from(`${num}`)      // using array method to create array and using template literal to convert number to string
      .map(x => x ** 2)       // after coverting to array we can now use array method, .map() to square one by one
      .join('')               // using join() to convert back from array to string
  );
  return newNum;              // OUTPUT
}
