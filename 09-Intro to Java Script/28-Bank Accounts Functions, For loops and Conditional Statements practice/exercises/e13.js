// EXERCISE 13
// Return an array of bank accounts that have a sum of deposits less than 2000 or no deposits at all
// Array example: bankAccounts in /data/data.js
// getAllAccountsWithSumsOfDepositsLess2000(bankAccounts) => [
// Susan's Account Object,
// Morgan's Account Object
// Joshua's Account Object
// Candy's Account Object,
// Phil's Account Object
// ]

export function getAllAccountsWithSumsOfDepositsLess2000(array) {
  let accountsLessThan2000 = [];
  for (const index in array) {
    if(sumOfDeposits(array[index]) < 2000){
      accountsLessThan2000.push(array[index]);
    }
  }
  return accountsLessThan2000;
}

function sumOfDeposits(account){
  let sum = 0;
  if(account.deposits){
    for (const index in account.deposits) {
      sum += account.deposits[index];
    }
  }
  return sum;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
