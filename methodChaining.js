let arr = [1, 2, 3, 4, 5];
function filterSqrSum(arr) {
    return arr
        .filter(item => item % 2 == 0)
        .map(item => item * item)
        .reduce((acc, item) => acc + item, 0);
}
let answer = filterSqrSum(arr);
console.log(answer);