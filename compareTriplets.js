let a = [3, 4, 5];
let b = [4, 4, 4];

function compareTriplets(a, b) {
    let comparisonResult = [0, 0];
    for (let i = 0; i < 3; i++) {
        if (a[i] > b[i]) {
            comparisonResult[0] = comparisonResult[0] + 1;
        }
        if (b[i] > a[i]) {
            comparisonResult[1] = comparisonResult[1] + 1;
        }
        if (a[i] === b[i]) {
            comparisonResult[0] = comparisonResult[0];
            comparisonResult[1] = comparisonResult[1];
        }
    }
    return comparisonResult;
}
console.log(compareTriplets(a, b));