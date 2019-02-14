

var button1 = document.getElementById('rock');
var button2 = document.getElementById('paper');
var button3 = document.getElementById('scissors');
var button4 = document.getElementById('new-game');
var output = document.getElementById('output');
var mainOutput = document.getElementById('output-main');
var result = document.getElementById('result');
var conditionbox = document.getElementById('condition-box');
var x = 0;
var y = 0;
var roundWinCondition;

function computerPlay() {
  var computerMind = Math.floor(Math.random() * 3 + 1);
  if (computerMind == 1) {
    return 'rock';
  } else
  if (computerMind == 2) {
    return 'paper';
  } else
  {
    return 'scissors';
  }
}
function game(playerMove) {
  var computerMove = computerPlay();
  if (playerMove == 'rock') {
    if (computerMove == 'paper') {
      mainOutput.innerHTML = lose(playerMove, computerMove);
    } else
    if (computerMove == 'scissors') {
      mainOutput.innerHTML = win(playerMove, computerMove);
    } else
    {
      mainOutput.innerHTML = tie(playerMove, computerMove);
    }
  } else
  if (playerMove == 'paper') {
    if (computerMove == 'rock') {
      mainOutput.innerHTML = win(playerMove, computerMove);
    } else
    if (computerMove == 'paper') {
      mainOutput.innerHTML = tie(playerMove, computerMove);
    } else
    {
      mainOutput.innerHTML = lose(playerMove, computerMove);
    }
  } else
  if (playerMove == 'scissors') {
    if (computerMove == 'rock') {
      mainOutput.innerHTML = lose(playerMove, computerMove);
    } else
    if (computerMove == 'paper') {
      mainOutput.innerHTML = win(playerMove, computerMove);
    } else
    {
      mainOutput.innerHTML = tie(playerMove, computerMove);
    }
  }
  resultCounter(x, y);
  endGame(x, y);
}
function win(playerMove, computerMove) {
  var bigplayerMove = playerMove.toUpperCase();
  var bigcomputerMove = computerMove.toUpperCase();
  x++;
  return 'You WON, you played ' + bigplayerMove + ' computer played: ' + bigcomputerMove + '<br>';
}
function lose(playerMove, computerMove) {
  var bigplayerMove = playerMove.toUpperCase();
  var bigcomputerMove = computerMove.toUpperCase();
  y++;
  return 'You LOST, you played ' + bigplayerMove + ' computer played: ' + bigcomputerMove + '<br>';
}
function tie(playerMove, computerMove) {
  var bigplayerMove = playerMove.toUpperCase();
  var bigcomputerMove = computerMove.toUpperCase();
  return 'TIE, you played ' + bigplayerMove + ' computer played: ' + bigcomputerMove + '<br>';
}
function resultCounter(yourScore, computerScore) {
  result.innerText = 'You ' + yourScore + ' - ' + computerScore + ' Computer ';
}
function roundsToWin(condition) {
  conditionbox.innerText = 'Required to win: ' + condition + ' rounds';
}
function endGame(yourScore, computerScore) {
  if (yourScore == value) {
    output.innerText += 'YOU WON THE ENTIRE GAME!!!';
    gameEnder();
  } else
  if (computerScore == value) {
    output.innerText += 'YOU LOST THE ENTIRE GAME!!!';
    gameEnder();
  }
}
function gameEnder() {
  mainOutput.innerHTML = 'Your game is over, please press the new game button.';
  gameOver = true;
}




button1.addEventListener('click', function () {
  if(gameOver == true){
    mainOutput.innerHTML += '<br> Your game is over, please press the new game button.';
  }
  else {
    playerMove = 'rock';
    game(playerMove);
  }
});

button2.addEventListener('click', function () {
  if(gameOver == true){
    mainOutput.innerHTML += '<br> Your game is over, please press the new game button.';
  }
  else {
    playerMove = 'paper';
    game(playerMove);
  }
});

button3.addEventListener('click', function () {
  if(gameOver == true){
    mainOutput.innerHTML += '<br> Your game is over, please press the new game button.';
  }
  else { 
    playerMove = 'scissors';
    game(playerMove);
  }
});

button4.addEventListener('click', function () {
  mainOutput.innerText = '';
  output.innerText = '';
  conditionbox.innerText = '';
  result.innerText = '';
  value = parseInt(prompt("How many rounds one needs to win the game?"));

  if(isNaN(value)) {
    mainOutput.innerText = 'Can\'t you count?'
  }
  else {
    roundsToWin(value);
    x = 0;
    y = 0;
    resultCounter(x, y);
    gameOver = false;
  }
});

// button5.addEventListener('click', function() {
//   output.innerHTML += '<br> Game over, please press the new game button!'
// })






// button1.addEventListener('click', game);
// button2.addEventListener('click', game);
// button3.addEventListener('click', game);
//   function game() {
//     var computerMove = computerPlay()
//     alert(computerMove)
//     alert(this.id)
//     if(this.id == computerMove) {
//       alert("1")
//        //return 'Tie, computer played ' + computerMove
//     }
//     else {
//       if(this.id == 'paper') {
//         if(computerMove == 'rock') {
//           alert("2")
//           //return 'You win, computer played ' + computerMove
//         }
//         else {
//           alert("3")
//           //return 'You lose, computer played ' + computerMove
//       }
//     }
//   }
// }