// The following exercise contains the following subjects:
// ● Order Of Operation
// ● If statements
// Instructions
// John and Mike both play basketball on different teams. In the
// latest 3 games, John's team scored 89, 120, and 103 points,
// while Mike's team scored 116, 94, and 123 points.

// 1. Calculate the average score for each team.
// 2. Decide which team wins on average (highest average
// score), and print the winner to the console. Also include
// the average score in the output.
// 3. Then change the scores to show different winners. Don't
// forget to take into account that there might be a draw (the
// same average score).
// 4. EXTRA: Mary also plays basketball, and her team scored
// 97, 134, and 105 points. Like before, log the average
// winner to the console.
// 5. Like before, change the scores to generate different
// winners, keeping in mind there might be draws.

// 1. Calculate the average score for each team
const johnScore = [89, 120, 103];
const mikeScore = [116, 94, 123];
const getAverege = (scoreArray) =>
  (scoreArray.reduce((a, b) => a + b) / scoreArray.length).toFixed(0);

const johnScoreAverage = getAverege(johnScore);
const mikeScoreAverage = getAverege(mikeScore);

const showWinner = (firstNum, secondNum) => {
  if (firstNum > secondNum) {
    return `John's team wins with ${firstNum} points`;
  } else if (firstNum < secondNum) {
    return `Mike's team wins with ${secondNum} points`;
  } else {
    return "Draw";
  }
};

console.log(showWinner(johnScoreAverage, mikeScoreAverage));

const johnScore2 = [189, 220, 403];
const mikeScore2 = [116, 94, 123];

const johnScoreAverage2 = getAverege(johnScore2);
const mikeScoreAverage2 = getAverege(mikeScore2);

console.log(showWinner(johnScoreAverage2, mikeScoreAverage2));
