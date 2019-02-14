

var playButtons = document.querySelectorAll('.player-move');
var button4 = document.getElementById('new-game');
var output = document.getElementById('output');
var mainOutput = document.getElementById('output-main');
var result = document.getElementById('result');
var conditionbox = document.getElementById('condition-box');
var params = {x: 0, y: 0, gameOver: true}
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
  resultCounter(params.x, params.y);
  endGame(params.x, params.y);
}
function win(playerMove, computerMove) {
  var bigplayerMove = playerMove.toUpperCase();
  var bigcomputerMove = computerMove.toUpperCase();
  params.x++;
  return 'You WON, you played ' + bigplayerMove + ' computer played: ' + bigcomputerMove + '<br>';
}
function lose(playerMove, computerMove) {
  var bigplayerMove = playerMove.toUpperCase();
  var bigcomputerMove = computerMove.toUpperCase();
  params.y++;
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
  params.gameOver = true;
}

for(i = 0; i < playButtons.length; i++){
  playButtons[i].addEventListener('click', function () {
    if(params.gameOver == true){
      mainOutput.innerHTML += '<br> Please press the new game button.';
    }
    else {
      playerMove = this.getAttribute('data-move');
      game(playerMove);
    }
  });
}

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
    params.x = 0;
    params.y = 0;
    resultCounter(params.x, params.y);
    params.gameOver = false;
  }
});
