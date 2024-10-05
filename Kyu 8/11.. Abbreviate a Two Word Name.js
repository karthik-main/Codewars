/*		Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot separating them.
It should look like this:

Sam Harris => S.H
patrick feeney => P.F	*/


///////////////////////////// Solution /////////////////////////////

function abbrevName(name){
  //to first letter we add the first letter immediately after  space 
 return (name[0]+'.'+name[name.indexOf(' ')+1]).toUpperCase();
}
