/*     An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
Implement a function that determines whether a string that contains only letters is an isogram. 
Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)
"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)        */



//////////////// solution ///////////////
function isIsogram(str) {
    // Convert the string to lowercase to ensure case insensitivity
   str = str.toLowerCase();
    
    // Split the string into an array of characters
    const charArray = str.split('');
    
    for (let i = 0; i < charArray.length; i++) {
        // Check if the last index of the current character is not equal to the current index
        if (charArray.lastIndexOf(charArray[i]) !== i) {
            return false; // Duplicate found
        }
    }
    return true; // No duplicates found
}
