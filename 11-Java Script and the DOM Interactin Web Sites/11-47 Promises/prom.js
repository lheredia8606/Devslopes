console.log('start');
const pokemon = fetch('https://pokeapi.co/api/v2/pokemon/ditto');

pokemon
.then((data)=>data.json())
.then((data)=>console.log(data))
.catch((error)=> console.log(error));