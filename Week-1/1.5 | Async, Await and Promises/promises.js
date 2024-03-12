function findSum(n){
    let ans = 0;
    for(let i=0;i<n;i++){
        ans += i;
    }
    return ans;
}

function findSummTill100(){
    console.log(findSum(100));
}
setTimeout(findSummTill100, 1000); 
console.log("hello world");

// Above code is ugly, Promises are syntactical sugar that make this code slightly more readable, under the hood it will still use Web API, callback queu and call stack

// How can we create a sync fxn of our own

const fs = require('fs');

// my own asyn fxn, it is just a wrapper on top of another async fxn, Usually all async fxns you write will be on top of JS provided async fxns like setTimeOut or fs.readFile
function ashwanisReadFile(cb){
    fs.readFile("a.txt", "utf-8", function(err, data){
        console.log(data);
    });
}

// cb function to call
function onDone(data){
    console.log(data);
}
ashwanisReadFile(onDone);


