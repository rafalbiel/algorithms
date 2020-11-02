
let ar = [4, 5, 6];

function simpleArraySum(ar) {
    
    let sum = 0;
    ar.forEach(function (element) {
        sum = sum + element;
    });
    return sum;
}
console.log(simpleArraySum(ar));