/*
Return the length of the longest word in the provided sentence.

Your response should be a number.


findLongestWordLength("The quick brown fox jumped over the lazy dog") should return a number.
findLongestWordLength("The quick brown fox jumped over the lazy dog") should return 6.
findLongestWordLength("May the force be with you") should return 5.
findLongestWordLength("Google do a barrel roll") should return 6.
findLongestWordLength("What is the average airspeed velocity of an unladen swallow") should return 8.
findLongestWordLength("What if we try a super-long word such as otorhinolaryngology") should return 19.
*/

function algorithm(str) {
  let longest = 0; // initialize a longest length
  const wordsArray = str.split(" "); // convert input string to an array so it can be evaluated
  for (const word of wordsArray) {
    // for each word in the array, if its length is longer than the current longest, replace the longest value
    if (word.length > longest) {
      longest = word.length;
    }
  }
  return longest;
}

module.exports = algorithm;
