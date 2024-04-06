// Exercise 1: Basic Arithmetic Operations
// Create a chain of promises to perform and log the result of three arithmetic operations in sequence.
// Start with a number, then add 5, multiply by 3, and finally subtract 2.

const arithmeticPromise = new Promise((resolve, reject) => {
  resolve(10);
})
  .then((result) => result + 5)
  .then((result) => result * 3)
  .then((result) => result - 2)
  .then((result) => console.log("🚀Exercise 1-", result));

// Exercise 2: String Manipulation
// Write a promise chain that takes a string, converts it to uppercase,
// then reverses it, and finally appends the string "-finished" at the end.
// Log the final result. Use `then` for every phase
let sting = "Pool";
const stringPromise = new Promise((resolve, reject) => {
  resolve(sting);
})
  .then((result) => result.toUpperCase())
  .then((result) => result.split(""))
  .then((result) => result.reverse())
  .then((result) => result.join(""))
  .then((result) => result + "-finished")
  .then((result) => console.log("🚀Exercise 2-", result));

// Exercise 3: Array Filtering and Mapping
// Write a function compareToNum that takes a number as an argument and returns a Promise
// that tests if the value is less than or greater than the value 10 (reject otherwise)
/**
 * @param {{num: number, isAboveNum: number}} options
 * @returns
 */
const compareToNum = (options) => {
  const { num, isAboveNum } = options;
  return new Promise((resolve, reject) => {
    if (isAboveNum > num) resolve("will reject");
    else reject("will resolve");
  });
};

compareToNum({ num: 10, isAboveNum: 5 }) //will reject
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
compareToNum({ num: 10, isAboveNum: 12 }) //will resolve
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

// Exercise 4: Delayed Greetings
// Simulate a delayed greeting with promises.
// First, wait 2 seconds, then log "Hello", wait another second, and log "World!".
// Each step should be done in a separate .then().

const greetingPromise = new Promise((resolve, reject) => {
  resolve();
})
  .then((result) => setTimeout((result) => console.log("hello"), 2000))
  .then((result) => setTimeout((result) => console.log("World!"), 3000));

// Exercise 5: Error Handling
// Create a promise chain that attempts to parse JSON data.
//  Use a try/catch block within a .then() method to handle JSON parsing errors.
//  If successful, log the parsed object; if an error occurs, log "Invalid JSON".
// - Bonus - Make an async await version
const jsonData = '{"name": "Alex", "position1": "middle"}';
const jsonDataError = '{name: "John", age: 30}';

async function dataParser(data) {
  return new Promise((resolve, reject) => {
    resolve(data);
  }).then((res) => {
    try {
      const parsedData = JSON.parse(res);
      console.log("parsedData", parsedData);
    } catch (error) {
      throw new Error("Invalid JSON");
    }
  });
}
dataParser(jsonData);
dataParser(jsonDataError);

// Exercise 6: Promise all
// Create "resolveImmediate" that resolves immediately to a number
// Create "resolveDelayed" that resolves to a number after 2 seconds

// // `fetchX()` should return a promise that is resolved to 25 immediately
// // and `fetchY()` should return a promise that is resolved after 2 seconds to 17

const resolveImmediate = () => Promise.resolve(20);
const resolveDelayed = () =>
  new Promise((resolve) => setTimeout(() => resolve(2), 2000));

function combine(prmX, prmY) {
  return Promise.all([prmX, prmY]).then((values) => {
    return values[0] + values[1];
  });
}

combine(resolveImmediate(), resolveDelayed()).then((sum) => {
  console.log("combine-", sum);
});

function fetchX() {
  return Promise.resolve(25);
}
fetchX().then((resolve => console.log('fetchX', resolve)))
function fetchY() {
    return new Promise(resolve => {
        setTimeout(() => resolve(17), 2000)
    })
}
fetchY().then((resolve => console.log('fetchY', resolve)))