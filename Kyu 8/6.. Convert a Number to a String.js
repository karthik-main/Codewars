/* We need a function that can transform a number (integer) into a string.
What ways of achieving this do you know?
--- Examples --- (input --> output):
123  --> "123"
999  --> "999"
-100 --> "-100" */


/////// SOLUTION //////////////
function numberToString(num) {
  return num.toString(); //By using .toString() method
  // OR 
  return String(num); //using String() constructor,called as function
  // OR
    return ''+num; //string concatenation, using empty sting and + operator
  // OR
  return `${num}`//using template literals because result is always a string
}
