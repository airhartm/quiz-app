//initialize variables

var fiboArray = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811];
var fiboResponse = [];
var fiboCounter;
var fiboRandom;
var gameResponse;
var gameStatusArray;
var currentQuestion=[];
var Question = []
var value;
var access = false;

//presence on screen/ during processing

$(document).ready(function() {

  //new game
  newGame();

   //reset game
    $("#new").click(function(){
      newGame();
    });


   //user supplies missing integers in sequence
  $('#guessSubmit').click(function(e) {
    e.preventDefault();
         for (i = 4; i< 7; i++) { 
                fiboResponse[i]=$('#Entry_'+i).val();
         }
    responseEval(fiboResponse);

  });

  $('#next').click(function(e) {
      e.preventDefault();
      newQuestion();
  });

  function newGame () {
    /*resetVars();*/
      fiboCounter=0;
      newQuestion();
  };

  function newQuestion () {
      fiboCounter++;
        $('#q_count').text("Question "+fiboCounter+" of 5");
        $('#response').text("Enter the missing numbers in the Fibonacci sequence above.");
        currentQuestion=fiboDisplay();
        document.getElementById("guessSubmit").style.visibility = "visible";
        document.getElementById("next").style.visibility = "hidden";
  };

});

  function getRandomNumber () {
    i=parseInt(Math.random()*fiboCounter*4)+1;
    return i;
    }

  function fiboDisplay (fiboForm) {
      fiboResponse.length=0;
      fiboRandom = getRandomNumber();
      new Answers(fiboRandom);

        var question = new Answers(fiboRandom);

        for (var i = 0; i< 8; i++) { 
                $('#Entry_'+[i]).css("color", "black");
                $('#Entry_'+i).readonly=true;
                fiboResponse[i]="";
                $('#Entry_'+i).val("");
        }
         for (var i = 0; i< 8; i++) { 
                $('#Entry_'+i).readonly=true;
                fiboResponse[i]=question.box[i];
                $('#Entry_'+i).val(fiboResponse[i]);
        }
         for (var i = question.startingBox; i< question.startingBox+3; i++) { 
                $('#Entry_'+i).readonly=false;
                fiboResponse[i]=question.box[i];
                $('#Entry_'+i).val("");
                //$('#Entry_'+i).val(fiboResponse[i]);
        }
        return fiboResponse;
  }

  function Answers(fiboRandom){
     this.box=[];
     for (i = 0; i< 8; i++) { 
         this.box[i]=fiboArray[fiboRandom+i];
        // this.numberEmpty=
     }
     this.startingBox=4
  }


  function responseEval(fiboResponse) {
         $('#Status_'+fiboCounter).css("backgroundColor", "green");
// rule in css for correct, toggle correct -- off correct, on incorrect
// jQuery hide and show
         $('#Status_'+fiboCounter).css("color", "white");
         for (i = 0; i< 8; i++) { 
                $('#Entry_'+[i]).css("color", "green");
                if (fiboArray[fiboRandom+i]!=fiboResponse[i]) {
                  $('#Entry_'+[i]).css("color", "red");
                  $('#Status_'+fiboCounter).css("backgroundColor", "red");
                }
          }
          $('#response').text("The correct answers were: "+fiboResponse);
          document.getElementById("guessSubmit").style.visibility = "hidden";
      if (fiboCounter < 5) {
          document.getElementById("next").style.visibility = "visible";
      } else {
          $('#response').text("Game over! Click 'New Game' to play again.");
          document.getElementById("next").style.visibility = "hidden";
      }
  }
 
  function progress_bar () {
    guessList='';
    for (i = 1; i <= guessCounter; i++) { 
        guessList=guessList+'<li>'+guessArray[i-1]+'</li>';
    }
    $('#progress_bar').html(guessList);
  }
