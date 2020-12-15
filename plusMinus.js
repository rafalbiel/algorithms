let arr = [-4, 3, -9, 0, 4, 1];
function plusMinus(arr) {
    let plus = 0;
    let minus = 0;
    let zero = 0;
    let x = arr.length;
    for (let i = 0; i < x; i++) {
        if (arr[i] < 0) {
            minus = minus + 1;
        }
        if (arr[i] > 0) {
            plus = plus + 1;
        }
        if (arr[i] === 0) {
            zero = zero + 1;
        }
    }
    let ratioArray = [(plus / x).toFixed(6), (minus / x).toFixed(6), (zero / x).toFixed(6)];
    ratioArray.forEach(function (ratio) {
        console.log(ratio);
    });
}
plusMinus(arr);