Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.


/////////////// SOLUTION /////////////////////////////////
  
function boolToWord( bool ){
   if (bool === true){    //using conditionals to see if bool equals to true
      return 'Yes'        // if it does then return 'yes' or else 'no'
   }else return 'No'
}
// OR
const boolToWord = bool => bool === true ? 'Yes':'No'  //shorter version
// OR
const boolToWord = bool => bool ? 'Yes':'No'           //shorter version
