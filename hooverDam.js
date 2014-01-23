
//PROBLEM 2://

/*
The Hoover Dam has 19 generators of multiple types. For simplicity, let’s say that the first 4 of these generators output 62 Megawatts, and the other 15 output 124 Megawatts. In hooverDam.js, the Dam Rangers have asked you to design a system of two loops that turns each generator on in progression, and prints the new total of Megawatts generated.

They’d like the first loop to be a while-loop handling the first 4 generators (they have not indicated why they have a preference, alas). Then, they’d like the second loop to be a for-loop that handles the other 15 generators. Each output line should resemble the following lines, with adjusted values where appropriate:

SAMPLE OUTPUT TEXT: Generator #1 is on, adding 62 MW, for a total of 62 MW!
                    Generator #2 is on, adding 62 MW, for a total of 124 MW!

*/






var currentGen = 1;
var totalGen = 19;
var totalMW = 0;

while(currentGen<=4){
    totalMW += 62;
    console.log("Generator #" + currentGen + " is on, adding 62 MW, for a total of " + totalMW + " MW!");
    currentGen++;
}
for(currentGen = 5; currentGen <= totalGen; currentGen++){
    totalMW += 124;
    console.log("Generator #" + currentGen + " is on, adding 124 MW, for a total of " + totalMW + " MW!");
}





// OUTPUT FILE: //


/*

Generator #1 is on, adding 62 MW, for a total of 62 MW!
Generator #2 is on, adding 62 MW, for a total of 124 MW!
Generator #3 is on, adding 62 MW, for a total of 186 MW!
Generator #4 is on, adding 62 MW, for a total of 248 MW!
Generator #5 is on, adding 124 MW, for a total of 372 MW!
Generator #6 is on, adding 124 MW, for a total of 496 MW!
Generator #7 is on, adding 124 MW, for a total of 620 MW!
Generator #8 is on, adding 124 MW, for a total of 744 MW!
Generator #9 is on, adding 124 MW, for a total of 868 MW!
Generator #10 is on, adding 124 MW, for a total of 992 MW!
Generator #11 is on, adding 124 MW, for a total of 1116 MW!
Generator #12 is on, adding 124 MW, for a total of 1240 MW!
Generator #13 is on, adding 124 MW, for a total of 1364 MW!
Generator #14 is on, adding 124 MW, for a total of 1488 MW!
Generator #15 is on, adding 124 MW, for a total of 1612 MW!
Generator #16 is on, adding 124 MW, for a total of 1736 MW!
Generator #17 is on, adding 124 MW, for a total of 1860 MW!
Generator #18 is on, adding 124 MW, for a total of 1984 MW!
Generator #19 is on, adding 124 MW, for a total of 2108 MW!


 */

