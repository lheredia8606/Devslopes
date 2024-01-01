const rs  = require ("readline-sync");
let board;
let shipRemaining;

function printBoard(){
  for (const line of board) {
    console.log(line);
  }
}
function initializeBoard(limit){
  board = [];
  for(let i = 0; i < limit; i++){
    board[i] = [];
    for(let j = 0; j < limit; j++){
      board[i][j] = '';
    }
  }
}
const getRandomSpot = function (limit){
  return [Math.floor(Math.random()*limit),Math.floor(Math.random()*limit)];
};
function placeShips (limit){
  [x,y] = getRandomSpot(limit);
  if(board[x][y] === 'B'){
    return placeShips(limit);
  } else{
    board[x][y] = 'B';
    shipRemaining ++;
    return true;
  }
}
function isInsideRange(number, limit){
  return (number >= 0 && number < limit);
}

function validatePlayerMove(playerMove, limit){
  if(playerMove && playerMove.length === 2){
    [x,y] = playerMove.split('');
    let spotX = Number(x.toLowerCase().charCodeAt()) - 'a'.charCodeAt();
    let spotY = Number(y);
    if (isInsideRange(spotX,limit) && isInsideRange(spotY,limit)){
      return [spotX,spotY]
    }
  }
  return [-1,-1];
}
function doPlayerMove(limit){
  let playerMove = rs.question("Enter a location to strike ie 'A2' ");
  [spotX, spotY] = validatePlayerMove(playerMove, limit);
  if(spotX !== -1){
    console.log(processPlayerMove(spotX, spotY-1));
  } else{
    console.log('Please enter a valid location');
  }
}

function processPlayerMove(spotX, spotY){
  let message = '';
  if(board[spotX][spotY] === 'B'){
    board[spotX][spotY] = 'O';
    shipRemaining --;
    message =  `Hit. You have sunk a battleship. ${shipRemaining} ship remaining`;
  }
  else{
    message =  board[spotX][spotY] === '' ? 'You have missed!' : "You have already picked this location. Miss!";
    board[spotX][spotY] = 'O';
  }
  return message;
}
function startGame(limit){
  let keepPlaying = true;
  while (keepPlaying){
    rs.keyInPause('Press any key to start the game!');
    initializeBoard(limit);
    shipRemaining = 0;
    placeShips(limit);
    placeShips(limit);
    while(shipRemaining > 0){
      printBoard();
      doPlayerMove(limit);
    }
    console.log('Congratulations, you Win');
    keepPlaying = rs.keyInYN('Do you want to play again?');
  }
}

startGame(3);


