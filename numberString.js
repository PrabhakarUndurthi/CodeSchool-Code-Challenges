//PROBLEM //

/*

Build out the numStrings function , using a loop that counts all of the strings in the array parameter called list. Remember to return the amount of strings found before the function exits.

*/

function numStrings(list) {
  var count = 0;
  for (var i = 0; i < list.length; i++){
    if( typeof list[i] == "string" ){
      count++;
    }
  }
  return count;
}