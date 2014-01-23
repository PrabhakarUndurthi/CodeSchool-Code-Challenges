


//PROBLEM //

/*

wrap your confirmation code in a while-loop that continues to execute as long as 
the user has not entered the correct age. The loop should re-prompt a user if the 
correct age was not entered. For any of these re-prompts, you should use the same 
message that was originally prompted, as seen below.

Remember that you will need to initialize your ageIsCorrect variable outside the loop, 
and then use a set of conditionals inside the loop to change the boolean value
 of ageIsCorrect when the user enters it correctly. After the age is correct, output
  a pop-up window that say:

*/



ar userAge = prompt("What's your age user?");
var ageIsCorrect = false;
while(!ageIsCorrect){
  if( confirm("You entered " + userAge + ". Is this correct?") ) {
    ageIsCorrect = true;
  } else {
    userAge = prompt("What's your age, user?");
  }    
}
alert("Great! Your age is logged as " + userAge + ".");

