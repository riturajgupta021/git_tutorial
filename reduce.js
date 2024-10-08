let arr = [5, 10, 15, 20];
function sum(arr) {
    return arr.reduce((acc, item) => acc + item, 0);
}
let answer = sum(arr);
console.log(answer);