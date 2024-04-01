// The following exercise contains the following subjects:
// ● date methods
// Instructions
// Let us self-learn something. You come to your new workplace
// and you are an expert in the technologies your company is
// working with. But all of the sudden your boss says. We want to
// implement a feature with dates. This will happen all the time in
// your career. So let's roll up our sleeves and start googling. How
// to .... “date js”.
// And as always the MDN docs are a great source Find how to
// get the following:
// 1. Name of the current day e.g. Sunday
const date = new Date();
console.log(date);
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "It Is Wednesday My Dudes",
  "Thursday",
  "Friday",
  "Saturday",
];
const today = date.getDay();
console.log(daysOfWeek[today]);

// 2. Current day of the month e.g. 31
const monthDay = date.getDate();
console.log(monthDay);

// 3. Current month e.g January
const monthsNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = date.getMonth();
console.log(monthsNames[month]);

// 4. Current Year e.g 2021
const currentYear = date.getFullYear();
console.log(currentYear);

// Create a function that will return a string in the following format:
// `Today is Sunday the 31 of January 2021’
const todayDate = `Today is ${daysOfWeek[today]} the ${monthDay} of ${monthsNames[month]} ${currentYear}`;
console.log(todayDate);
