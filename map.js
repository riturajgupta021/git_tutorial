let arr = [2, 3, 4, 5];
function sqreNum(arr) {
    return arr.map(item => item * item);
}
let answer = sqreNum(arr);
console.log(answer);