//random chance slot machine
function randomChance(numOfQuarters){
  //creates a random number of quarters
  var possibleQ = Math.trunc(Math.random()* 50) + 101;
  var currentQuarters = numOfQuarters;
  //prompts user for how many quarters they would like before they stop
  var endAmount = prompt("How many quarters do you want before you stop?");
  while(currentQuarters >= 0){
    //random number between 1 and 100
    var result = Math.trunc(Math.random() * 101);
    if (result == 1) {
      //if true you won now take your quarters
      console.log("You Won! You now have:")
      console.log(currentQuarters += possibleQ);
      //else you're out of quarters
    } else if (currentQuarters == endAmount) {
      return console.log(currentQuarters + " quarters left");
      break;
    } else if (currentQuarters == 0){
      return console.log(0 + " quarters left");
    }
    console.log(currentQuarters);
    currentQuarters--;
  }
}
randomChance(100);
