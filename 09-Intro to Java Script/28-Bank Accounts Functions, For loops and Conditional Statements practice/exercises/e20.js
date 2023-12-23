
// EXERCISE 20
// Return and array of 2 arrays
// (1 - an array of names that contain "a" in name, 2 - an array of names that don't have 'a' in name)
// separateNamesWithAFromRest(["jon", "alice", "andrew", "mark", "jimmy"]) -> [["alice", "andrew", "mark"], ["jon", "jimmy"]]
// NOTE: You MUST use double/nested FOR loop to solve this exercise. The array.includes() method is NOT allowed.

export function separateNamesWithAFromRest(array) {
  let namesWithA = [];
  let namesWithoutA = [];
  for (const nameIndex in array) {
    let flag = false;
    for (const charIndex in array[nameIndex]) {
      if (array[nameIndex][charIndex].toLowerCase() === 'a'){
        flag = true;
      }
    }
    if(flag){
      namesWithA.push(array[nameIndex])
    } else {
      namesWithoutA.push(array[nameIndex])
    }    
  }
  return [namesWithA, namesWithoutA];
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-20"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
