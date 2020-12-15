let ar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];

function veryBigSum(ar) {
    let sum = 0;
    ar.forEach(function (element) {
        sum = sum + element;
    });
    return sum;
}
console.log(veryBigSum(ar));