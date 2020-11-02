let array = [10, 20, 20, 10, 10, 30, 50, 10, 20];
let obj = {};
let result = array.reduce(function (a, b) {

    if (a[b]) {
        a[b] = a[b] + 1;
    } else {
        a[b] = 1;
    }
    return a;
}, {})

console.log(result);
let arrayOfKeys = Object.keys(result);
console.log(arrayOfKeys);
let sumOfValues = 0;
arrayOfKeys.forEach(
    function (key) {
        sumOfValues = sumOfValues + Math.floor(result[key] / 2);

    }
)
console.log(sumOfValues);