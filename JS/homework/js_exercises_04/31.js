// <!-- JavaScript – functions
// The following exercise contains the following subjects:
// ● Debugging
// Instructions
// # Note: We ask you not to solve the bug by finding it with
// your eyes but to use the debugging tools we've learned!
// What is wrong with this code?
function getSum(arr1, arr2) {
  const sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    sum += arr2[i];
  }
}
getSum([1, 2, 3][(5, 66, 23)]);

// 1. First, find the line that contains the problem. Write it down.
// - const sum = 0;
// - getSum([1, 2, 3][(5, 66, 23)]);

// 2. Which debug method did you use to find the bug?
// - google chrome

// 3. Explain the bug in your own words.
// - constant instead of variable const -> let
// - Calling the function getSum() with invalid arguments

// 4. Fix the code and submit it all.
function getSumFixed(arr1, arr2) {
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    sum += arr2[i];
  }
  return sum
}

console.log(getSumFixed([1, 2, 3],[5, 66, 23]));