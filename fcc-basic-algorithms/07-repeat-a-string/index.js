/*
Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.


repeatStringNumTimes("*", 3) should return "***".
Passed
repeatStringNumTimes("abc", 3) should return "abcabcabc".
Passed
repeatStringNumTimes("abc", 4) should return "abcabcabcabc".
Passed
repeatStringNumTimes("abc", 1) should return "abc".
Passed
repeatStringNumTimes("*", 8) should return "********".
Passed
repeatStringNumTimes("abc", -2) should return "".

*/
const repeatStringNumTimes = (str, num) => {
  let result = ""
  // if num is zero or negative, return empty string
  if (num <= 0) {
    return result;
  }
  for (let i = 1; i <= num; i++ ) {
    result += str
  }
  return result;
}


module.exports = repeatStringNumTimes;
