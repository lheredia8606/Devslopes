
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  let wrongBalance = [];
  for (const accountIndex in array) {
    let totalDeposits = getTotalDeposits(array[accountIndex]);
    let totalWithdrawal = getTotalWithdrawal(array[accountIndex]);
    if(array[accountIndex].balance !== totalDeposits - totalWithdrawal){
      wrongBalance.push(array[accountIndex]);
    }
  }
  return wrongBalance;
}

function getTotalDeposits(account){
  let totalDeposits = 0;
  if(account.deposits){
    for (const deposit in account.deposits) {
      totalDeposits += account.deposits[deposit];
    }
  }
  return totalDeposits;
}
function getTotalWithdrawal(account){
  let totalWithdrawal = 0;
  if(account.withdrawals){
    for (const withdrawal in account.withdrawals) {
      totalWithdrawal += account.withdrawals[withdrawal];
    }
  }
  return totalWithdrawal;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
