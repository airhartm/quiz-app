//initialize variables

var fiboEntry;
var fiboArray = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811];
var fiboCalc;
var fiboCounter=1;
var gameResponse;
var gameStatusArray;

$(document).ready(function() {

   //reset game
    $(".new").click(function(){
      newGame();
    });

  //new game
  newGame();

  function newGame () {
    resetVars();

  function fiboDisplay () {
    fiboDisplay='';
    for (i = 0; i <= 7; i++) { 
        fiboArray[i]=fiboArray[i-2]+fiboArray[i-1];
    }
    $('form').html(fiboDisplay);
  }

};
