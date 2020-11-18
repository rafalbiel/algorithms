let arr = [[1, 2, 3, 1], [4, 5, 6, 1], [7, 8, 9, 1], [1, 1, 1, 1]];

function diagonalDifference(arr) {
    let difference = 0;
    let sumLeftDiagonal = 0;
    let sumRightDiagonal = 0;
    let i = 0;

    arr.forEach(function (element) {
        sumRightDiagonal = sumRightDiagonal + element[i];
        sumLeftDiagonal = sumLeftDiagonal + element[element.length - 1 - i];
        i++;
    });
    return difference = Math.abs(sumRightDiagonal - sumLeftDiagonal);
}
console.log(diagonalDifference(arr));