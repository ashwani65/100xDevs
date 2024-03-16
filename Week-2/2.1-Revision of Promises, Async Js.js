
function square(n) {
    return n * n;
}

function cube(n) {
    return n * n * n;
}

function sumOfSquares(a, b) {
    let square1 = square(a);
    let square2 = square(b);
    return square1 + square2;
}

function sumOfCube(a, b) {
    let square1 = cube(a);
    let square2 = cube(b);
    return square1 + square2;
}
  
// let ans = sumOfCube(1, 2);
// console.log(ans);

// Why call backs ?, above example has code repetition
function sumOfSomething(a, b, cb) {
  let square1 = cb(a);
  let square2 = cb(b);
  return square1 + square2;
}


let ans = sumOfSomething(1, 2, square);
console.log(ans);