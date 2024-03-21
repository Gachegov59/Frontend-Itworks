// JavaScript – sum of even
// The following exercise contains the following subjects:
// ● debugging
// Instructions
// # Note: We ask you not to solve the bug by finding it with
// your
// eyes but to use the debugging tools we've learned!
// What is wrong with this code?

function getSumOfEven(arr) {
  return arr[2] + arr[4] + arr[6] + arr[8] + arr[10];
}
console.log(getSumOfEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// 1. First, find the line that contains the problem. Write it down.
// + arr[10] (line 11)

// 2. Which debug method did you use to find the bug?
// -chrome

// 3. Explain the bug in your own words.
// arrow not have element with this index HARDCODE 😕!

// 4. Fix the code and submit it all.
function getSumOfEven2(arr) {
    return arr.reduce((a, b) => a += b % 2 ? 0 : b, 0);
  }
console.log(getSumOfEven2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// we want to sum all numbers in even cells in arrays of size 10:
// [1,2,3,4,5,6,7,8,9,10] => 2+4+6+8+10 = 30