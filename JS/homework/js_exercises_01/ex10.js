// The following exercise contains the following subjects:
// ● conditional statements
// Instructions
// Create a function that takes 1 argument, a number score.
// Returns either “A”, ”B”, “C”, “D”, “F”.
// score of:
// 0-64 is a “F”
// 65-69 is a “D”
// 70-79 is a “C”
// 80-89 is a “B”
// 90-100 is an “A

function score(score) {
    if(score < 0 || score > 100 || typeof score !== 'number') {
        return 'Invalid score';
    }
    if(score < 65) {
        return 'F';
    } else if(score < 70) {
        return 'D';
    } else if(score < 80) {
        return 'C';
    } else if(score < 90) {
        return 'B';
    } else {
        return 'A';
    }
}