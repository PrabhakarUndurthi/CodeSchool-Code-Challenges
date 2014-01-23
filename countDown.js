//PROBLEM ://

/*In countdown.js below, modify the while-loop with a conditional that will 
only allow a number to be printed if it is even. Your results should be the 
even numbers from 10 to 2 descending. Think carefully about how your code might 
decide if a number is even… */


var num = 10;
while(num>0){
  if(num % 2 == 0){
    console.log(num);
  }
  num--;
}



/* Out put 

10
8
6
4
2  */