let letters= [];
const fs = require('fs');
const {parse} = require ('csv-parse');
const readlineSync = require ('readline-sync');

const { log } = require('console');
function processWord (data){
  let index = data.indexOf(' ');
  let word = data.slice(0,index);
  let meaning = data.slice(index+1);
  return {word:word,meaning:meaning}
}
fs.createReadStream("./K.csv")
  .pipe(parse({ delimiter: ",", from_line: 2 }))
  .on("data", (row) =>{
    if(!(row[0] === '')){
      word = processWord(row[0]);
      letters.push(word);
    }
  })
  .on("end", function () {
    const theWord = readlineSync.question('Please, enter the word ');
    const result = letters.find(({word}) => word === theWord);
    let toReturn = result?result.meaning:'Unknown Word!!!'
    console.log(toReturn);
    console.log('finished');
  })
  .on("error", function (error) {
    console.log(error.message);
  });
  
  

