import { contacts } from "../data/contacts.js";

console.log(contacts);
/**
 * Write a function to return the array of contacts in reverse order.
 * Do not use the built-in reverse() method.
 */
const createReverseArray = () => {
  const reverseArray = [];
  for (let i = contacts.results.length - 1; i >= 0; i--) {
    reverseArray.push(contacts.results[i]);
  }
  return reverseArray;
};
console.log("createReverseArray();", createReverseArray());

/**
 * - Write a function that returns the first 5 contacts from the
 *  sorted list (by last name).
 */
const getFerstFiveSortedNames = () => {
  contacts.results.sort((a, b) => a.name.last.localeCompare(b.name));
  return contacts.results.slice(0, 5);
};

// console.log("getFerstFiveSortedNames()", getFerstFiveSortedNames());

/**
 * - Create a function that returns an array of all unique first names.
 * No duplicates should be present.
 */
const getUniqueFirstNames = () => {
  return [...new Set(contacts.results.map((contact) => contact.name.first))];
};
// console.log("getUniqueFirstNames()", getUniqueFirstNames());

/**
 * - Looping Through Arrays Write a loop that iterates through
 * the array and logs each contact's email to the console.
 */
const allemailsToConsole = () => {
  contacts.results.forEach((contact, i) => console.log(contact.email));
};
// console.log("allemailsToConsole()", allemailsToConsole());

/**
 * - Write a function that takes an ID as a parameter
 * and returns the contact with that ID.
 */
const getContactById = (id) => {
  return contacts.results.find((contact) => contact.id.value === id);
};

// console.log(getContactById("543829024"))

/**
 * - Create a function that counts how many contacts are from a specific country.
 * The country should be a parameter of the function.
 */

const countContactsByCountry = (country) => {
  return contacts.results.filter(
    (contact) => contact.location.country === country
  );
};

// console.log("countContactsByCountry()", countContactsByCountry("New Zealand"));

/**
 * - Write a function that returns a new array of contacts
 * that are within a given age range, e.g., 25 to 35 years old.
 */

const hetContactsByAgeRange = (minAge, maxAge) => {
  return contacts.results.filter(
    (contact) => contact.dob.age >= minAge && contact.dob.age <= maxAge
  );
};
// console.log('hetContactsByAgeRange()', hetContactsByAgeRange(25, 35))