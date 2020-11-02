let ar = [5, 6, 7];
let sum = 0;
function simpleArraySum(ar){
  
    for (let i = 0; i < ar.length; i++) {
        sum = sum + ar[i];
    }
    return sum;
}

console.log(simpleArraySum(ar));