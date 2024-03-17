// map, filter, arrow fns
// given an array, give me back a new array in which every value is multipled by 2
// [1, 2, 3, 4, 5]
// [2, 4, 6, 8, 10]

// Arrow functions
function sum(a, b) {
    return a + b;
}

const sum = (a, b) => {
    return a + b;
}

const input = [1, 2, 3, 4, 5];
// Another solution, In js we know function take fxn as argument => map(arr, fxn) -> map exists on array class
function transform(i){
    return i * 2;
}
const ans = input.map(transform);
console.log(ans);

const ans1 = input.map(function (i){
    return i * 2;
})
// create a map fxn that takes 2 inputs an array, and a transformation callback/fn and transforms the array into a new one using the transformation fn


// Filtering, filter(arr, fxn)

function filterLogic(n){
    if(n%2 == 0){
        return true;
    }else{
        return false;
    }
}

const ans2 = arr.filter((n)=>{
    if(n%2 == 0){
        return true;
    }else{
        return false;
    }
});

console.log(ans2);

