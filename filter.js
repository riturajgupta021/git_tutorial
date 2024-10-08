let arr = [1, 2, 3, 4, 5, 6];
function filterEven(arr) {
    return arr.filter(item => item % 2 == 0);
}
let answer = filterEven(arr);
console.log(answer);