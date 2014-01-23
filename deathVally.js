//PROBLEM:
 /*In the Death Valley National Park, a group of environmentalists have begun a project that 
 will grow the population of Bighorn Sheep. Every month, the population will multiply by four! 
 To stay on top of this explosive growth, the scientists would like a printout of how many sheep 
 will make a new home in Death Valley.//

 In deathValley.js, use the three existing variables to build a while-loop that prints a message 
 for 1 year’s worth of time. Here’s what the first line of output should look like: */

 	// SAMPLE OUTPUT: //
 //There will be 64 sheep after 2 month(s)!
//There will be 256 sheep after 3 month(s)!




var numSheep = 4;
var monthNumber = 1;
var monthsTopPrint = 12;

while (monthNumber <= monthsToPriint){
	numSheep *= 4;
	console.log("There will be" + numSheep +
"sheep after" + monthNumber + "months(!)";
monthNUmber ++;
}



// Out put //

/*There will be 16 sheep after 1 month(s)!
There will be 64 sheep after 2 month(s)!
There will be 256 sheep after 3 month(s)!
There will be 1024 sheep after 4 month(s)!
There will be 4096 sheep after 5 month(s)!
There will be 16384 sheep after 6 month(s)!
There will be 65536 sheep after 7 month(s)!
There will be 262144 sheep after 8 month(s)!
There will be 1048576 sheep after 9 month(s)!
There will be 4194304 sheep after 10 month(s)!
There will be 16777216 sheep after 11 month(s)!
There will be 67108864 sheep after 12 month(s)!

*/
