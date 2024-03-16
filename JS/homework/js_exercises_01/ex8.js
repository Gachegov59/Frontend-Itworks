// The following exercise contains the following subjects:
// ● functions
// Instruction

// 1. The world population is 7900 million people. Create
// a function declaration called 'percentageOfWorld1'
// which receives a 'population' value, and returns the
// percentage of the world population that the given
// population represents. For example, China has
// 1441 million people, so it's about 18.2% of the world
// population.

const worldPopulation = 7900
// 2. To calculate the percentage, divide the given
// 'population' value by 7900 and then multiply by 100.
function percentageOfWorld1(population) {
    return (population / worldPopulation * 100).toFixed(1) + '%'
}
console.log(percentageOfWorld1(1441));

// 3. Call 'percentageOfWorld1' for 3 populations of
// countries of your choice, store the results into
// variables and log them to the console.
const spainPopulation = 47
const russiaPopulation = 152
const israelPopulation = 9.3
console.log(percentageOfWorld1(spainPopulation));
console.log(percentageOfWorld1(russiaPopulation));
console.log(percentageOfWorld1(israelPopulation));

// 4. Create a function expression that does the exact
// same thing, called 'percentageOfWorld2', and also
// call it with 3 country populations (can be the same
// populations)

const percentageOfWorld2 = (population) => (population / worldPopulation * 100).toFixed(1) + '%'
console.log(percentageOfWorld2(spainPopulation));
console.log(percentageOfWorld2(russiaPopulation));
console.log(percentageOfWorld2(israelPopulation))