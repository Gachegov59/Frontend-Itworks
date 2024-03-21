// JavaScript – get sum
// The following exercise contains the following subjects:
// ● find smallest
// Instructions
// # Note: We ask you not to solve the bug by finding it with
// your eyes but to use the debugging tools we've learned!
// What is wrong with this code?
// function findSmallest(a, b, c) {
//     if (a > b > c) {
//       return c;
//     } else if (a > c > b) {
//       return a;
//     } else {
//       return b;
//     }
//   }
//   findSmalest(52, 66, 2);

  
// 1. First, find the line that contains the problem. Write it down.
// - findSmalest(52, 66, 2);
// - return a; (line 12)

// 2. Which debug method did you use to find the bug?
// google chrome

// 3. Explain the bug in your own words.
// "findSmalest is not defined" - error in function's name
// nedd to return b instead of a (line 12)

// 4. Fix the code and submit it all.
function findSmallest(a, b, c) {
    if (a > b > c) {
      return c;
    } else if (a > c > b) {
      return b;
    } else {
      return c;
    }
  }
  
console.log(findSmallest(52, 66, 2));