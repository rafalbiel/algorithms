let arr = [[1, 2, 3, 1], [4, 5, 6, 1], [7, 8, 9, 1], [1, 1, 1, 1]];

function diagonalDifference(arr) {
    let x = arr.length;
    let sum = 0;
    let sumL = 0;
    let sumR = 0;
    let y = x;
    for (let i = 0; i < x; i++) {
        console.log(arr[i][i]);
        sumL = sumL + arr[i][i];
        console.log(arr[i][y - 1]);
        sumR = sumR + arr[i][y - 1];
        y--;
    }
    console.log(sumL);
    console.log(sumR);
    sum = Math.abs(sumR - sumL);
    return sum;
}
console.log(diagonalDifference(arr));