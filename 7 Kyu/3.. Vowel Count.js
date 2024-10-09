/*    Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.    */

// Solution =>
function getCount(a) {
  let sum = 0;                // using 0 as base
  for(i=0; i<a.length; i++){  // looping through the string,
    if (a[i]==='a' || a[i]==='e' || a[i]==='i' || a[i]==='o' || a[i]==='u'){
      sum += 1                 // adds 1 each times we find a vowel
    }
  }
  return (sum)                // output
}
