 /**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  let asteroidsPerYear = {};
  data.asteroids.map(function (asteroid){
  if(asteroid.discoveryYear in asteroidsPerYear){
    asteroidsPerYear[asteroid.discoveryYear] += 1;
  }
  else{
    asteroidsPerYear[asteroid.discoveryYear] = 1;
  }
  });
 let yearWithMost; 
 for (const prop in asteroidsPerYear) {
    if(yearWithMost){
      if(asteroidsPerYear[prop] > asteroidsPerYear [yearWithMost]){
        yearWithMost = prop;
      }
    } else{
      yearWithMost = prop;
    }
 }
 return Number(yearWithMost);
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
