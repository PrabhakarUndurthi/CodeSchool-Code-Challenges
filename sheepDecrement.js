// PROBLEM //

/*

Well, 67 million to 1 million is a significant difference, but it’s still too many for the 
fragile Death Valley ecosystem. The Rangers have made the following new plan for population reduction:

--Reduce the population by 75% every 4 months.
--In months where the 75% reduction does NOT take place, if the population is above 10,000 
at the beginning of the month, reduce the population by half as normal.

Implement the new sheep reduction plan with two different conditionals. Feel free to 
declare a new variable to keep track of how many sheep you are removing (although you don’t need to). 
Use the same removal message in your printout for both cases of reduction.

*/



var numSheep = 4;
var monthsToPrint = 12;

for(var monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++) {

  if(monthNumber % 4 == 0) {
    numSheep = numSheep/4;
    console.log("Removing " + numSheep*3 + " sheep from the population. Phew!");
  }
  else if(numSheep > 10000) {
    numSheep = numSheep/2;
    console.log("Removing " + numSheep + " sheep from the population. Phew!");
  }
  numSheep*=4;
  console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
}



/* 
There will be 16 sheep after 1 month(s)!
There will be 64 sheep after 2 month(s)!
There will be 256 sheep after 3 month(s)!
Removing 192 sheep from the population. Phew!
There will be 256 sheep after 4 month(s)!
There will be 1024 sheep after 5 month(s)!
There will be 4096 sheep after 6 month(s)!
There will be 16384 sheep after 7 month(s)!
Removing 12288 sheep from the population. Phew!

*/

