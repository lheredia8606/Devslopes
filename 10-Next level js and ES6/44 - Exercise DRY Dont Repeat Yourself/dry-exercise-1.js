/* 
- The code below manually prints out each value in the animal Array.
- Refactor the code so it prints each value in the array, following the DRY Principle.
*/

const animals = ["Reindeer", "Wolf", "Cat"];
const showAnimals = animals =>{
  for (const animal of animals) {
    console.log(animal);
  }
}

showAnimals(animals);