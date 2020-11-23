let scores = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42];
function breakingRecords(scores) {
    let highestScore = scores[0];
    let highestScoreCounter = 0;
    let lowestScore = scores[0];
    let lowestScoreCounter = 0;
    for (let index = 1; index < scores.length; index++) {
        if (scores[index] < lowestScore) {
            lowestScore = scores[index];
            lowestScoreCounter++;
        }
        if (scores[index] > highestScore) {
            highestScore = scores[index];
            highestScoreCounter++;
        }
    }
    return [highestScoreCounter,lowestScoreCounter];
}
console.log(breakingRecords(scores));