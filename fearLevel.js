

//PROBLEM//

/*

The devs need you to check the already-generated fear value for that day, 
and decide whether it is LOW, MEDIUM, or HIGH. Depending on the severity of the fear, 
they want a specific confirmation message built inside a function expression, and 
they want this function expression stored in a variable called fearMessage.
 (They are sort of picky about implementation).

Then, this fearMessage variable should be passed into a declared function 
called confirmRide, which is provided for you. Additionally, the results of calling 
confirmRide should be stored in a variable called startRide (i.e., true, or false, 
from the user’s confirmation).

***TEST CASES***

TEST CASE 1 FOR FEAR LEVEL 200
Fear Level: LOW
Should be no problem at all...mwahaha.
Still wanna ride?

TEST CASE 1 FOR FEAR LEVEL 300
Fear Level: MEDIUM.
You may want to rethink this one, man. MWAHAHA!
Think you'll make it?

TEST CASE 1 FOR FEAR LEVEL 300-400
Fear Level: HIGH
ABANDON ALL HOPE!!
Have a death wish? */



var fear = fearGenerated(numPeeps, rainInInches, numSharks);

var fearMessage;

if(fear < 200){
  fearMessage = function () {
    return confirm( "Fear Level: LOW.\n" +
      "Should be no problem at all...mwahaha.\n" +
      "Still wanna ride?");
  };

} else if (fear<=300) { 
  fearMessage = function () {
    return confirm( "Fear Level: MEDIUM.\n" + 
      "You may want to rethink this one, man. MWAHAHA!\n" +
      "Think you'll make it?");
  };

} else {
  fearMessage = function () {
    return confirm( "Fear Level: HIGH.\n" + 
      "ABANDON ALL HOPE!!\n" + 
      "Have a death wish?" );
  };
}

var startRide = confirmRide(fearMessage);

function confirmRide( confirmToGo ){
  return confirmToGo();
}








