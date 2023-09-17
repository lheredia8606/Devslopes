class Player{
  cards = [];
  name = '';
  constructor (name){
    this.name = name;
  }
  addCard (card){
    this.cards.push(card);
  }
  getPoints(){
    let points = 0;
    for(let i = 0; i < this.cards.length; i++){
      points += this.cards[i].value;
    }
    if(points>21){
      for(let j = 0; j < this.cards.length; j++){
        if(this.cards[j].number === 'Ace'){
          points -=10;
        }
        if(points<=21)
          return points;
      }
    }
    return points;
  }
  showFirstCard(){
    
  }
}
class Card{
  constructor (suits, number, value){
    this.suits = suits;
    this.number = number;
    this.value = value;
  }
  getCard(){
    if(this.number != 'Ace'){
    return `${this.number} of ${this.suits} with a value of ${this.value} points.`;
  }
  else{
    return `${this.number} of ${this.suits} with a value of 1 or 11 points.`;
    }
  }
}
class Deck {
  deck = [];
  suits = ['Spade', 'Heart', 'Diamond', 'Clubs'];
  nameValue = [
    {name:'Ace', value:11},
    {name:'2', value:2},
    {name:'3', value:3},  
    {name:'4', value:4},
    {name:'5', value:5},
    {name:'6', value:6},
    {name:'7', value:7},
    {name:'8', value:8},
    {name:'9', value:9},
    {name:'10', value:10},
    {name:'Jack', value:10},
    {name:'Queen', value:10},
    {name:'King', value:10}
  ]
  constructor (){
    this.populateDeck();
    this.shuffleDeck();
  }

  populateDeck(){
    for(let i = 0; i < this.suits.length; i++){
      for(let j = 0; j < this.nameValue.length; j++){
        let {name,value} = this.nameValue[j];
        let card = new Card(this.suits[i], name,value);
        this.deck.push(card);
      }
    }
  }
  shuffleDeck(){
    for (let i = this.deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = this.deck[i];
      this.deck[i] = this.deck[j];
      this.deck[j] = temp;
  }
}
  pickACard(){
    return this.deck.shift();
  }
}
const readlineSync = require ('readline-sync');
let numberOfPlayers = 0;
let players = [];
let winningPlayer = [];
console.log('Welcome to black Jack 1.0');
numberOfPlayers = readlineSync.questionInt('Please, enter the number of players (1-4)');
while (numberOfPlayers > 4 || numberOfPlayers < 1){
  console.log('Invalid entry');
  numberOfPlayers = readlineSync.questionInt('Please, enter the number of players (1-4)');
}
const theDeck = new Deck();
for(let i = 0; i < numberOfPlayers; i++){
  let name = readlineSync.question(`Please, enter the name of player ${i+1} `);
  players[i] = new Player(name);
  players[i].addCard(theDeck.pickACard());
  players[i].addCard(theDeck.pickACard());
}
let dealer = new Player('Dealer');
dealer.addCard(theDeck.pickACard());
dealer.addCard(theDeck.pickACard());
for(let i = 0; i < numberOfPlayers; i++){
  let flag = true;
  console.log(`${players[i].name}\'s turn`);
  if(winningPlayer.length > 0){
    if(winningPlayer.length > 1){
      console.log(`Currently are ${winningPlayer.length} ties:`);
      winningPlayer.forEach(element => {
        console.log(element.name);
      });
      console.log(`With ${winningPlayer[0].getPoints()} points`);
    }
    else {
      console.log(`Currently is winning ${winningPlayer[0].name} with ${winningPlayer[0].getPoints()} points`);
    }
  }
  else{
    console.log('Currently nobody is winning');
  }
  console.log(`Dealer face up card is ${dealer.cards[0].getCard()}`)
  console.log(`${players[i].name}\'s turn`);
  while(flag){
    console.log('This are your cards');
    for(let j = 0; j < players[i].cards.length; j++){
      console.log(players[i].cards[j].getCard());
    }
    if(players[i].getPoints() <= 21){
      console.log(`${players[i].name} currently you have ${players[i].getPoints()} points`);
      let pickMore = readlineSync.keyInYN('Do you want to pick up another card?');
      if(pickMore){
        players[i].addCard(theDeck.pickACard());
      }
      else{
        flag = false;
        console.log(`${players[i].name} you finish whit ${players[i].getPoints()} points`);
        if(winningPlayer.length === 0 || players[i].getPoints() > winningPlayer[0].getPoints()){
          winningPlayer = [players[i]];
        }
        else if(players[i].getPoints() === winningPlayer[0].getPoints()){
          winningPlayer.push(players[i]);
        }
      }
    }
    else{
      flag = false;
      console.log(`Sorry ${players[i].name} you lose, you exceed the 21 points`);
    }
  }
}
let flag = true;
while (flag){
console.log('This are the dealer\'s cards');
for(let j = 0; j < dealer.cards.length; j++){
  console.log(dealer.cards[j].getCard());
}
console.log(`Currently dealer has ${dealer.getPoints()} points`);
if(winningPlayer.length === 0 || dealer.getPoints() > winningPlayer[0].getPoints() && dealer.getPoints() < 22){
  console.log(`Dealer has won with ${dealer.getPoints()} points`);
  flag = false;
}
else if(dealer.getPoints() === winningPlayer[0].getPoints()){
  console.log(`Dealer and the following player(s) tied with ${dealer.getPoints()} points:`);
  for (let i = 0; i < winningPlayer.length; i++) {
    console.log(winningPlayer[i].name);  
  }
  flag = false;
}
else if (dealer.getPoints() >= 17){
  console.log(`The following player(s) win with ${winningPlayer[0].getPoints()} points:`);
  for (let i = 0; i < winningPlayer.length; i++) {
    console.log(winningPlayer[i].name); 
  }
  flag = false;
}
else{
  console.log(`Dealer will pick another card....`);
  dealer.addCard(theDeck.pickACard());
}

}



