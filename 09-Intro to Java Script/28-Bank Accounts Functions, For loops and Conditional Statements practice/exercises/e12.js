
// EXERCISE 12
// Return an array of all deposits greater than 100
// Array example: bankAccounts in /data/data.js
// getAllDepositsGreaterThanOneHundred(bankAccounts) => [3432, 43242.34, 23432]

export function getAllDepositsGreaterThanOneHundred(array) {
  let allDepositGreaterThan100 = [];
  for (const index in array) {
    if(array[index].deposits){
      for (const deposit in array[index].deposits) {
        if(array[index].deposits[deposit] > 100){
          allDepositGreaterThan100.push(array[index].deposits[deposit]);
        }
      }
    }
  }
  return allDepositGreaterThan100
  }



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
