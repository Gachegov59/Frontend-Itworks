// JavaScript – average
// The following exercise contains the following subjects:
// ● debugging
// Instructions
// # Note: We ask you not to solve the bug by finding it with
// your eyes but to use the debugging tools we've learned!
// What is wrong with this code?
function calcAverage(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(calcAverage([85, 90, 92]));
// 1. First find the line that contains the problem. Write it down.
// - var sum;

// 2. Which debug method did you use to find the bug? - chrome

// 3. Explain the bug in your own words.
// - sum is not defined

// 4. Fix the code and submit it all.
function calcAverageFixed(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

console.log(calcAverageFixed([85, 90, 92]));
