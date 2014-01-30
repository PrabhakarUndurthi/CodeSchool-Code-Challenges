//PROBLEM//


/*

the guys at Poplar Puzzles would like you to treat an array of functions like a Queue, passing the result of each function into the next until the Queue is empty. They’ve sent you the new queue of functions, and a “simple directive”:

In a variable called applyAndEmpty, build and store a function that takes in a single number and any Queue of functions as inputs and then applies the Queue’s functions in order to the input number, where the results of each function become the next function’s input. Additionally, the queue should be empty following your application. Lastly, because we are just that freaking awesome, any loops you use must only be for-loops. MWAHAHA. Then call your new function using the number 2 and the provided puzzlers queue as initial inputs, and alert the result.
- PuZzLe MaSTeRs

The new Queue of functions to use is below.

var puzzlers = [ 
  function ( a ) { return 8*a - 10; }, 
  function ( a ) { return (a-3) * (a-3) * (a-3); }, 
  function ( a ) { return a * a + 4; },
  function ( a ) { return a % 5; }
];

*/


var puzzlers = [
    function ( a ) { return 8*a - 10; }, 
    function ( a ) { return (a-3) * (a-3) * (a-3); }, 
    function ( a ) { return a * a + 4; },
    function ( a ) { return a % 5; }
];
var start = 2;
var applyAndEmpty = function( input, queue ) {

  var length = queue.length;
  for(var i = 0; i<length; i++){
    input = queue.shift()(input);
  }
  return input;
};
alert(applyAndEmpty(2, puzzlers));