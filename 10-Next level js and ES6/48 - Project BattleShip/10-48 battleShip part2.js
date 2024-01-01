let rs = require('readline-sync');
class Board{
  constructor(size){
    this.size = size;
    this.board = [];
    this.ships = [];
    this.createBoard();
    //if true allow to see the position of ships  :) 
    this.cheatMode = true;
    this.legend = {
      'visited' : 'O',
      'notVisited' : ' ',
      'hit' : 'X',
      'occupied' : 'B',
    }
  }
  createBoard(){
    for(let i = 0; i < this.size; i++){
      this.board [i] = [];
      for(let j = 0; j < this.size; j ++){
        this.board[i][j] = new Spot();
      }
    }
  }

  placeShips(shipArr){
    for (const ship of shipArr) {
      this.placeBoat(ship);
    }
  }

  shipsRemaining(){
    let remainingSips = 0;
    for (const ship of this.ships) {
      if(!ship.isSunk()){
        remainingSips ++;
      }
    }
    return remainingSips;
  }

  drawBoard (){
    let boardString = '   ';
    for (let i = 1; i < this.board.length + 1; i++){
      boardString +=  i > 9 ? ` ${i}  ` : `  ${i}  `;
    }
    for (const index in this.board) {
      boardString += this.drawRow(index);
    }
    return boardString + '\n  '+ '-----'.repeat(this.board.length)+'\n';
  }

  drawRow (index){
    let firstLetter = 'A';
    let division = '\n  '+ '-----'.repeat(this.board.length)+'\n';
    let str = division + String.fromCharCode(firstLetter.charCodeAt(0)+ Number(index)) +' |';
    for (const spot of this.board[index]) {
      if(this.cheatMode && spot.occupied === true && spot.status === 'notVisited'){
          str += `  ${this.legend['occupied']} |`;
        }else{
        str += `  ${this.legend[spot.status]} |`;
      }
    }
    return str;
  }

  getRandomNumber (range){
    return Math.floor(Math.random() * range) + 1;
  }
  placeBoat(ship){
    let trying = true;
    while(trying){
      let spotX = this.getRandomNumber(this.size)-1;
      let spotY = this.getRandomNumber(this.size)-1;
      let shipOrientation = this.getRandomNumber(2) === 1 ? 'vert' : 'hor';
      let spotsOccupied = undefined;
      let calculator = {
        '-': (a,b) => a-b,
        '+': (a,b) => a+b,
      }
      if(shipOrientation === 'vert'){
        spotsOccupied = this.tryToPlaceVert(spotX, spotY, '+', ship, calculator);
        if(spotsOccupied === undefined){
          spotsOccupied = this.tryToPlaceVert(spotX, spotY, '-', ship, calculator);
        }
      }else{
        spotsOccupied = this.tryToPlaceHor(spotX, spotY, '+', ship, calculator);
        if(spotsOccupied === undefined){
          spotsOccupied = this.tryToPlaceHor(spotX, spotY, '-', ship, calculator);
        }
      }
      if(spotsOccupied){
        for (const [a,b] of spotsOccupied) {
          this.board[a][b].occupied = true;
        }
        this.ships.push(ship);
        trying = false;
      }
    }
  }

  tryToPlaceVert(spotX, spotY, operation, ship, calculator){
    let spotsToReturn = [];
    if(operation === '+' ? 
      calculator[operation](spotY, ship.size) < this.size -1 
      :calculator[operation](spotY, ship.size) >= 0 ){
        for(let i = 0; i < ship.size; i++){
          if(this.board[spotX][calculator[operation](spotY,i)].occupied === false){
            spotsToReturn.push([spotX, calculator[operation](spotY,i)]);
            ship.spots.push({x:spotX, y:calculator[operation](spotY,i)});
          } else{
            ship.spots = [];
            return undefined;
          }
        }
        return spotsToReturn;
    } else{
      return undefined;
    }
  }

  tryToPlaceHor(spotX, spotY, operation, ship, calculator){
    let spotsToReturn = [];
    if(operation === '+' ? 
      calculator[operation](spotX, ship.size) < (this.size - 1) 
      :calculator[operation](spotX, ship.size) >= 0 ){
        for(let i = 0; i < ship.size; i++){
          if(this.board[calculator[operation](spotX,i)][spotY].occupied === false){
            spotsToReturn.push([calculator[operation](spotX,i), spotY]);
            ship.spots.push({x:calculator[operation](spotX,i), y:spotY});
          } else{
            ship.spots = [];
            return undefined;
          }
        }
        return spotsToReturn;
    } else{
      return undefined;
    }
  }

  enemyMove(spotX, spotY){
    let spot = this.board[spotX][spotY];
    if(spot.status === 'visited' || spot.status === 'hit' ){
      return 'You have already picked this location. Miss!';
    } else if(spot.occupied){
      spot.occupied = false;
      spot.status = 'hit';
      return this.hitShip(spotX, spotY);
    }else{
      spot.status = 'visited';
      return 'You have missed!'
    }
  }
  
  hitShip(spotX, spotY){
    let ship = this.findShipBySpot(spotX,spotY);
    ship.getHit(spotX,spotY);
    if(ship.isSunk()){
      return `Hit. You have sunk a ${ship.name}. ${this.shipsRemaining()} ship remaining.`
    }
    return 'Hit';
  }

  findShipBySpot(spotX, spotY){
    for (const ship of this.ships) {
      for (const {x,y} of ship.spots) {
        if(x === spotX && y === spotY){
          return ship;
        }
      }
    }
  }
}

class Spot {
  constructor (){
  this.occupied = false;
  this.status = 'notVisited';
  }
}

class Ship{
  constructor(name, size){
    this.name = name;
    this.size = size;
    this.spots = [];
  }
  getHit(spotX, spotY){
    for (const spot of this.spots) {
      if(spot.x === spotX && spot.y === spotY){
        spot.hit = true
      }
    }
  }
  isSunk(){
    for (const spot of this.spots) {
      if(!spot.hit){
        return false
      }
    }
    return true;
  }
}

function validateSpot (size, spot){
  if (spot >= 0 && spot < size){
    return true;
  }
  return false;
}

function validatePlayerMove(size, playerMove){
  let [spotX, ...spotY] = playerMove.split('');
  valueX = (Number(spotX.toUpperCase().charCodeAt(0)) - Number('A'.charCodeAt(0)));
  valueY = Number(spotY.join('')) - 1;
  if(validateSpot(size, valueX) && validateSpot(size,valueY)){
    return [valueX, valueY];
  } else{
    return [-1,-1];
  }
}
function playerMoveHandler(size){
  let [spotX, spotY] = [-1,-1];
  while(spotX === -1){
    let playerMove = rs.question("Enter a location to strike ie 'A2'");
    if(playerMove === ''){
      console.log('You must enter a spot in order to play!');
      continue;
    }
    [spotX, spotY] = validatePlayerMove(size, playerMove);
    if(spotX === -1){
      console.log('You must enter a valid spot in order to play!');
      continue;
    }
  }
  return [spotX,spotY];
}

function startGame(){
  let keepPlaying = true;
  rs.keyIn('Press any key to start the game');
  while(keepPlaying){
    const ships = [new Ship('Destroyer', 2), new Ship('Submarine', 3), new Ship('Cruiser', 3),
    new Ship('Battleship', 4), new Ship('Carrier', 5)];
    const theBoard = new Board(10);
    theBoard.placeShips(ships);
    while(theBoard.shipsRemaining() != 0){
      console.log(theBoard.drawBoard());
      let [spotX, spotY] = playerMoveHandler(theBoard.size);
      console.log(theBoard.enemyMove(spotX,spotY));
    }
    console.log('Congratulations! You Win!!!!!');
    keepPlaying = rs.keyInYN('Do you want to play again? (y/n)');
  }
}

startGame();