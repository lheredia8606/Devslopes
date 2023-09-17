const readlineSync = require ('readline-sync');
let board;
let remainingShips;
let attempts;
const keypress = async () => {
  process.stdin.setRawMode(true)
  return new Promise(resolve => process.stdin.once('data', () => {
    process.stdin.setRawMode(false);
    resolve();
  }))
};
(async () => {
  console.log('Press any key to start the game')
  await keypress();
  prepareBoard();
  console.log('   A B C');
  console.log('1  ' + board[0]);
  console.log('2  ' + board[1]);
  console.log('3  ' + board[2]);
  while (remainingShips > 0) {
    let result = processStrike(promptLocation());
    switch (result){
      case 'Strike':
        remainingShips --;
        attempts ++;
        console.log(`Hit. You have sunk a battleship. ${remainingShips} ship remaining.`);
        break;
      case 'Miss':
        console.log(`You have missed!`);
        attempts ++;
        break;
      case 'Visited':
        console.log(`You have  already picked this location. Miss!`);
        attempts ++;
        break;
    }
  console.log(board[0]);
  console.log(board[1]);
  console.log(board[2]);
  }
  console.log(`You win after ${attempts} attempts`);
})().then(process.exit);
function prepareBoard(){
  remainingShips = 2;
  attempts = 0;
  board = [[0,0,0],[0,0,0,],[0,0,0]];
  let x = Math.floor(Math.random() * 3);
  let y = Math.floor(Math.random() * 3);
  board[x][y] = 1;
  x = Math.floor(Math.random() * 3);
  y = Math.floor(Math.random() * 3);
  while(board[x][y] === 1) {
    x = Math.floor(Math.random() * 3);
    y = Math.floor(Math.random() * 3);
  }
  board[x][y] = 1;
}
function getLocation(str){
  possibleX = ['a','b','c','A','B','C'];
  possibleY = ['1','2','3'];
  let location = {
    x: -1,
    y: -1,
  };
  if(possibleX.find((value) => value === str[0]) 
    && possibleY.find((value) => value === str[1])
    && str.length === 2){
      location.x = possibleX.indexOf(str[0].toLowerCase());
      location.y = possibleY.indexOf(str[1]);
  }
  return location;
}
function promptLocation(){
  userStrike = readlineSync.question(`Enter the location to strike ie 'A2' `);
  location = getLocation(userStrike);
  while (location.x === -1){
    console.log(`You enter a wrong location`);
    userStrike = readlineSync.question(`Enter the location to strike ie 'A2' `);
    location = getLocation(userStrike);
  }
  return location;
}
function processStrike (location){
  if (board[location.x][location.y] === 1){
    board[location.x][location.y] = -1;
    return 'Strike';
  } else if (board[location.x][location.y] === 0){
    board[location.x][location.y] = -1;
    return 'Miss';
  }
  return 'Visited';
}