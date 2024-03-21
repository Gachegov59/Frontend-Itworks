// JavaScript – closures
// The following exercise contains the following subjects:
// ● closures
// Instructions
// Without running the code below, explain in your own
// words what the result of each block of code will be and
// why.

// Block 1
var b = 1;
function someFunction(number) {
  function otherFunction(input) {
    return b;
  }
  b = 5;
  return otherFunction;
}
var firstResult = someFunction(9);
var result = firstResult(2);
// 18 line - firstResult will be function otherFunction() {...}, because we not executed it
// 19 line - result will be 5

// Block 2
var a = 1;
function b2() {
  a = 10;
  return;
  function a() {}
}
b2();
console.log(a);
/// on the line 31 will be 1
// - Because inside function b2() function a() created varible name "a" on top of the function
// which become to creating variable "a" insede, and assigment value 10 to a occur on insed varibale
// this mean thai outside global variable "a" will be 1 will not change

// Block 3
let i;
for (i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
  };
  setTimeout(log, 100);
}
// it will be 3 3 3
// because in for loop there is not variable for i and it scope will be global
// when all callbacks in setTimeout will be execute they won't closure on inside "i" 
// because they will be share the same variable "i" outside, which = 3