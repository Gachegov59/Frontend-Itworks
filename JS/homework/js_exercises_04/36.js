// <!-- JavaScript – scope & hoisting
// The following exercise contains the following subjects:
// ● scope
// ● hoisting
// Instructions
// Without running the code below, explain in your own words
// what the result of each block of code will be and why.
// If there are any faulty outputs, please write on how we can fix
// them.
// Block 1

function funcA() {
  console.log(a);
  console.log(foo());
  var a = 1;
  function foo() {
    return 2;
  }
}
funcA();
// undefined - because "a" initialized on line 15
// 2 - because foo() is function declaration and it can host


// Block 2
var fullName = "John Doe";
var obj = {
  fullName: "Colin Ihrig",
  prop: {
    fullName: "Aurelio De Rosa",
    getFullName: function () {
      return this.fullName;
    },
  },
};
console.log(obj.prop.getFullName());
var test = obj.prop.getFullName;
console.log(test());

// 1 - "Aurelio De Rosa" - method getFullName of object "obj" return this.name
//      where this, is the object - prop:{...}
// 2 - "John Doe" - because we copy methods getFullName to var test, and we call outside,
//      where another contenxr and "fullName" = "John Doe"


// Block 3

function funcB() {
  let a = (b = 0);
  a++;
  return a;
}
funcB();
console.log(typeof a);
console.log(typeof b);


// 1 - undefined, because "let a" in function block scope
// 2 - number, because "let b" not inizialized insede function, what makes it global



// Block 4

function funcC() {
  console.log("1");
}
funcC();
function funcC() {
  console.log("2");
}
funcC();
// we rewrite funcC() on 69 line and called it two times, it will show - 2, 2


// Block 5
function funcD1() {
  d = 1;
}
funcD1();
console.log(d);
function funcD2() {
  var e = 1;
}
funcD2();
// console.log(e);

// function funcD1 nothing return on 80 line
// on 81 line in'll show 1, becouse "d" initialized outside function
// var e = 1 insede function funcD2 and not accesebible ouside, in will cause error

// Block 6
function funcE() {
  console.log("Value of f in local scope: ", f);
}
console.log("Value of f in global scope: ", f);
var f = 1;
funcE();

// line 97 -  indefined - f is not defined yet
// line 98 - 1 - Value of f in global scope: 1 - becouse f already defined


