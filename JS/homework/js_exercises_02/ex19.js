// The following exercise contains the following subjects:
// ● Array
// Instructions
// For each of the questions below, answer the questions with this
// array:
const people = ["Greg", "Mary", "Devon", "James"];
// 1. Using a loop, iterate through this array and console.log all of the people.
people.forEach(name => console.log(name))
// 2. Write the command to remove "Greg" from the array.
people.splice(0, 1)
// 3. Write the command to remove "James" from the array.
people.splice(people.findIndex(name => name === "James"), 1)
// 4. Write the command to add "Matt" to the front of the array.
people.unshift("Matt")
// 5. Write the command to add your name to the end of the array.
people.push("Alex")
// 6. Using a loop, iterate through this array, and after console.log "Mary", exit from the loop.
people.forEach(name => {
    if (name === "Mary") {
        return
    } else {
        console.log(name)
    }
})
// 7. Write the command to make a copy of the array using a
// slice. The copy should NOT include "Mary" or "Matt".
const copy = people.slice(2, people.length)
// 8. Write the command that gives the indexOf where "Mary" is located.
const index = people.findIndex(name => name === "Mary")

// 9. Write the command that gives the indexOf where "Foo" is
// located (this should return -1).
const index2 = people.findIndex(name => name === "Foo")

// 10. Redefine the people variable with the value you started
// with. Using the splice command, remove "Devon" from
// the array and add "Elizabeth"
// and "Artie". Your array should look like this when you are
// done ["Greg", "Mary", "Elizabeth", "Artie",
// "James"].
{
    const people = ["Greg", "Mary", "Devon", "James"];
    people.splice(2, 1, "Elizabeth", "Artie")
}
// 11. Create a new variable called withBob and set it equal
// to the people array concatenated with the string of "Bob"
const withBob = people.concat("Bob")