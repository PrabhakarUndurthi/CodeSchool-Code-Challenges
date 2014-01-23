

//PROBLEM //

/*

The Park Rangers in Death Valley National Park divide up the feed responsibilities
 daily for the Bighorn Sheep population.

They need a function written for their ranger website, call it feedPerRanger, that takes in

(1) the current population of sheep and (2) the amount of park rangers available during 
the day, and then alerts to the screen the amount of feed each park ranger should be 
responsible for on that day to the screen. This will allow the rangers to load their 
official Big-Ass Ranger Trucks (BARTs) appropriately.

Each sheep needs 2 lbs of Ranger-provided food per day (in addition to the sparse plantlife it munches). Build out the function declaration feedPerRanger to the right. The function’s output should match the following format:

*/


function feedPerRanger (population, rangers) {
  var numLbsNeeded = population *2;
  var feedPerRanger = numLbsNeeded/rangers;
  alert("Each Park Ranger should load " + feedPerRanger + " lb(s) of feed into his/her BART today.");
  return;
}