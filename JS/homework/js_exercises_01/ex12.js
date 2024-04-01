// The following exercise contains the following subjects:
// ● JavaScript
// Instructions
// Write a function that takes one argument n, an integer.
// Print out all the numbers between 1 to n.
// If the number is only divisible by 7 print “BOOM”
// If the number is divisible by 7 and also includes the digit 7 print
// “BOOM-BOOM”
// If either of the above cases prints the number.
// Example of numbers between 1 to 18:
// 1,2,3,4,5,6, BOOM-BOOM,8,9,10,11,12,13,BOOM,15,16,17,18
// Hint:
// Use the includes method to find out if the number includes a 7.

function boom(n) {
  if (n % 7 === 0 && n.toString().includes(7)) return 'BOOM-BOOM'
  if (n % 7 === 0 && n !== 0) return 'BOOM'
  else return n
}

console.log(boom(70))
console.log(boom(14))
console.log(boom(2))
console.log(boom(0))