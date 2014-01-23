// PROBLEM //

/*
The devs at the Death-Defying Dogwoods have determined a specific formula for the quantifiable amount of Fear generated at the DDD. (This is important to know if you are running a theme park, ya know). Their mystery formula is based on the amount of people at the Dogwoods, the current precipitation, and, as might be expected, the amount of sharks. Yes. Sharks.

The goal of the developers is to have the amount of Fear generated to be no more than 400, but no less than 100 (they’re running a business, for pity’s sake!).

They’ve asked you to analyze the formula, and then assign values to the variables in dogwoods.js on the right, where the clickable entry space is. Additionally, they need you to then call the function expression on the next line, using your new values as parameters, and store the result in a variable called fear.


*/

var people = 5;
var rain = 6;
var sharks = 6;
var fearGenerated = function ( numPeeps, rainInInches, numSharks){
  var rainFear = numPeeps * rainInInches;
  var sharkFear = numSharks * numSharks * numSharks;
  var totalFear = sharkFear + rainFear;
  return totalFear;
};
var fear = fearGenerated(people, rain, sharks);
//Generates 5*6 + 6^3 = 246 FEAR. AGGGGH!!



