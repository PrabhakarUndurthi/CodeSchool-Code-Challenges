

// PROBLEM ://

/*
scientists could see that the Death Valley Sheep Situation would quickly get out of control. 67,000,000 bighorn sheep are reported to be hard to handle. The scientists have decided that, for any month the population is above 10,000, half of the sheep will be sent to other regions that have endangered populations. The rate at which the staying population grows, however, will stay the same (x4).

  Write code using for loop , and insert a conditional that:
  1.Halves the sheep population AND 
  2. prints a notice to the console if the populationi rises above 10,000

     The notice should take the following format:

    SAMPLE OUTPUT : Removing <number> sheep from the population. Phew!


*/



var numSheep = 4;
var monthsToPrint = 12;

for(var monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++) {
  if(numSheep > 10000) {
    numSheep = numSheep/2;
    console.log("Removing " + numSheep + " sheep from the population. Phew!");
  }
  numSheep*=4;
  console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
}


