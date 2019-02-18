

var playButtons = document.querySelectorAll('.player-move');
var button4 = document.getElementById('new-game');
var output = document.getElementById('output');
var mainOutput = document.getElementById('output-main');
var result = document.getElementById('result');
var conditionbox = document.getElementById('condition-box');
var modals = document.querySelectorAll('.modal');
var params = {x: 0, y: 0, c: 1, gameOver: true, progress: []}
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
      var defeat = true;
    } else
    if (computerMove == 'scissors') {
      var victory = true;
      mainOutput.innerHTML = win(playerMove, computerMove);
    } else
    {
      var tied = true;
      mainOutput.innerHTML = tie(playerMove, computerMove);
    }
  } else
  if (playerMove == 'paper') {
    if (computerMove == 'rock') {
      var victory = true;
      mainOutput.innerHTML = win(playerMove, computerMove);
    } else
    if (computerMove == 'paper') {
      var tied = true;
      mainOutput.innerHTML = tie(playerMove, computerMove);
    } else
    {
      var defeat = true;
      mainOutput.innerHTML = lose(playerMove, computerMove);
    }
  } else
  if (playerMove == 'scissors') {
    if (computerMove == 'rock') {
      var defeat = true;
      mainOutput.innerHTML = lose(playerMove, computerMove);
    } else
    if (computerMove == 'paper') {
      var victory = true;
      mainOutput.innerHTML = win(playerMove, computerMove);
    } else
    {
      mainOutput.innerHTML = tie(playerMove, computerMove);
    }
  }

  var outcome = function() {
    if(victory === true){
      return 'WIN'
    }
    else if(defeat === true){
      return 'LOSE'
    }
    else {
      return 'TIE'
    }
  }

  var scoreBoard = {
    numerRundy: params.c, ruchGracza: playerMove, ruchKomputera: computerMove,wynik: outcome(), finalScore: params.x + '-' + params.y
  }

  params.progress.push(scoreBoard)

  resultCounter(params.x, params.y, params.c);
  endGame(params.x, params.y);

}
function win(playerMove, computerMove) {
  var bigPlayerMove = playerMove.toUpperCase();
  var bigComputerMove = computerMove.toUpperCase();
  params.x++; //your score
  return 'You WON, you played ' + bigPlayerMove + ' computer played: ' + bigComputerMove + '<br>';
}
function lose(playerMove, computerMove) {
  var bigplayerMove = playerMove.toUpperCase();
  var bigcomputerMove = computerMove.toUpperCase();
  params.y++; //computer score
  return 'You LOST, you played ' + bigplayerMove + ' computer played: ' + bigcomputerMove + '<br>';
}
function tie(playerMove, computerMove) {
  var bigplayerMove = playerMove.toUpperCase();
  var bigcomputerMove = computerMove.toUpperCase();
  return 'TIE, you played ' + bigplayerMove + ' computer played: ' + bigcomputerMove + '<br>';
}
function resultCounter(yourScore, computerScore, roundNumber) {
  result.innerText = 'You ' + yourScore + ' - ' + computerScore + ' Computer. Round: ' + roundNumber;
}
function roundsToWin(condition) {
  conditionbox.innerText = 'Required to win: ' + condition + ' rounds';
}
function endGame(yourScore, computerScore) {
  if (yourScore == roundsInput) {
    document.querySelector('#modal-one .content').innerText = 'YOU WON THE ENTIRE GAME!!!'; // modal-one is end game modal
    gameEnder();
  } else
  if (computerScore == roundsInput) {
    document.querySelector('#modal-one .content').innerText = 'YOU LOST THE ENTIRE GAME!!!'; // modal-one is end game modal
    gameEnder();
  }
  else {
    params.c++; //round number
  }
}
function gameEnder() {
  createScoreBoard();
  showModal();
  params.gameOver = true;
}

function createScoreBoard() {
  for(var i = 0; i < params.progress.length; i++){  //ilość obiektów w tablicy progress
    var tr = document.createElement('TR');
    tr.classList.add('expendable')
    var obj = params.progress[i]   
    for(var key in obj){  
      var td = document.createElement('TD')
      td.innerHTML = obj[key]
      tr.appendChild(td)
    }
    document.getElementById('root').appendChild(tr)
  }
}

var showModal = function(event){
  for(var i = 0; i < modals.length; i++){
  modals[i].classList.remove('show')
  }
  document.querySelector('#modal-one').classList.add('show')//STATIC
  document.querySelector('#modal-overlay').classList.add('show');
};

var hideModal = function(event){
  event.preventDefault();
  document.querySelector('#modal-overlay').classList.remove('show');
};

var deleteTable = function(){
  var root = document.getElementById('root');
  var expendable = document.querySelectorAll('.expendable');
  
  for(var i = 0; i < expendable.length; i++){
    root.removeChild(expendable[i]);
  }
}

var closeButtons = document.querySelectorAll('.modal .close');

for(var i = 0; i < closeButtons.length; i++){
  closeButtons[i].addEventListener('click', hideModal);
}

document.querySelector('#modal-overlay').addEventListener('click', hideModal);

for(var i = 0; i < modals.length; i++){
  modals[i].addEventListener('click', function(event){
    event.stopPropagation();
  });
}

for(var i = 0; i < playButtons.length; i++){
  playButtons[i].addEventListener('click', function () {
    if(params.gameOver == true){
      mainOutput.innerHTML += 'Please press the new game button. <br>';
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
  deleteTable();
  roundsInput = parseInt(prompt("How many rounds one needs to win the game?"));

  if(isNaN(roundsInput)) {
    mainOutput.innerText = 'Can\'t you count?'
  }
  else {
    roundsToWin(roundsInput);
    params.x = 0;
    params.y = 0;
    params.c = 1;
    resultCounter(params.x, params.y, params.c);
    params.progress = [];
    params.gameOver = false;
  }
});
