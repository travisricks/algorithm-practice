/*
Create a function that takes an amount of US currency in cents, and returns an object with the appropriate change.

Input: Number
Output: Object/Hashmap containing Quarters, Dimes, Nickels, and Pennies

*/
const looseChange = cents => {
  const result = { quarters: 0, dimes: 0, nickels: 0, pennies: 0 }; // initialize results object
  const dict = { quarters: 25, dimes: 10, nickels: 5, pennies: 1 }; // create a dictionary of the coin values
  let runningTotal = cents; // tracking the running total for the loop

  for (const coin in dict) {
    // if the change can be made with the first coin, 
    // update the result and return
    if (runningTotal % dict[coin] === 0) {
      result[coin] = runningTotal / dict[coin];
      return result; // exit case
    } else {
      // update the current coin with as many coins as possible, 
      // then change the running total to track the remaining balance
      result[coin] = (runningTotal - (runningTotal % dict[coin])) / dict[coin];
      runningTotal = runningTotal % dict[coin];
    }
  }
};

module.exports = looseChange;
