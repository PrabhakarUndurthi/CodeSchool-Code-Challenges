 //PROBLEM //

 /*

The folks over at Poplar Puzzlers need an array of functions for one of their puzzles. They’ve requested your help in making the array, which they would like to be called puzzlers. The cells of the array should each contain a function, and these functions are listed here in order:

Returns 8 less than 3 times an input.
Returns the cube of the sum of an input and 2.
Returns 9 less than the result of an input squared.
Returns the remainder after an input is divided by 4.


 */



 var puzzlers = [
  function ( a ) { return 3*a - 8; }, 
  function ( a ) { return (a+2) * (a+2) * (a+2); }, 
  function ( a ) { return a * a - 9; },
  function ( a ) { return a % 4; }
];

