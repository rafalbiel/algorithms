let arr = [9, 7, 5, 3, 1];
function miniMaxSum(arr) {
    let sortedArray = arr.sort();
    let arrayLength = arr.length;
    function minFunction(sortedArray) {
        let min = 0;
        for (let i = 0; i < 4; i++) {
            min = min + sortedArray[i];
        }
        return min;
    }
    function maxFunction(sortedArray) {
        let max = 0;
        for (let j = arrayLength - 1; j > 0; j--) {
            max = max + sortedArray[j];
        }
        return max;
    }
    console.log(minFunction(sortedArray) + " " + maxFunction(sortedArray));
}
miniMaxSum(arr);
