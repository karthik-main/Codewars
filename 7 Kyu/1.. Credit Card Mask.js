/*    Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. 
However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.
---- Examples (input --> output): -----
"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""
"Skippy" --> "##ippy"     // "What was the name of your first pet?"
"Nananananananananananananananana Batman!" --> "####################################man!"    */



////////////////// SOLUTION ////////////////////////
function maskify(creditCardNumber) {
  if (creditCardNumber.length < 4) {           // If the credit card number has less than 4 characters, return it as is
    return creditCardNumber;
  }
  const maskedPart = '#'.repeat(creditCardNumber.length - 4);   // Create a masked string with '#' for all but the last 4 characters
  const visiblePart = creditCardNumber.slice(-4);

  return maskedPart + visiblePart;              // Combine the masked part and the visible part

}
